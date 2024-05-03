import Company from '../models/company.js'
import FinanceCompany from '../models/financeCompany.js'
import Taxes from '../models/taxes.js'
import Sales from '../models/sales.js'
import Shopping from '../models/shopping.js'
import Report from '../models/report.js'
import Icome from '../models/icome.js'
import Projections from '../models/projections.js'
import mongoose from 'mongoose'


export class ReportController {
  static async getAll (req, res) {
        const data = await Report.find().populate({
          path: 'company',
          select: ['name', 'ruc'] 
        })
        .populate({
          path: 'icome',
          populate: {
            path: 'financeCompany',
            select: ['name', 'ruc'] 
          },
          select: 'amount'
        })
        .populate({path: 'projections',
          populate:[{
              path: 'sales',
              select: ['total', 'worth', 'igv']
            },
            {
              path: 'shopping',
              select: ['total', 'worth', 'igv']
            }
          ]})
        .populate({path:'taxes', select: ['of_the_period',
          'credit_in_favor',
          'to_return' ,
          'monthly_rent' ,
          'total']})

        return res.status(200).json(data);
  }
  static async create (req, res) {
    const {company, period, exercise, icome, projections, taxes} = req.body
    //const {financeCompany, amount} = icome
    const {sales, shopping} = projections
    const arrayIcome = []
    const newCompany = new Company({
      _id: new mongoose.Types.ObjectId(),
      ruc: company.ruc,
      name: company.name
    })
    await newCompany.save()
    
    
    await icome.forEach((icomeDetail)=>{
      const {financeCompany, amount} = icomeDetail

      const newFinanceCompany = new FinanceCompany({
        _id: new mongoose.Types.ObjectId(),
        name:financeCompany.name,
        ruc: financeCompany.ruc
      })
      
      newFinanceCompany.save()
  
      const newIcome = new Icome({
        _id: new mongoose.Types.ObjectId(),
        financeCompany: newFinanceCompany._id,
        amount: amount
      })

      newIcome.save()
      arrayIcome.push(newIcome)
      
    })

    const newSales = new Sales({
      _id: new mongoose.Types.ObjectId(),
      total: sales.total,
      worth: sales.worth,
      igv: sales.igv
    })
    await newSales.save()

    const newShopping = new Shopping({
      _id: new mongoose.Types.ObjectId(),
      total: shopping.total,
      worth: shopping.worth,
      igv: shopping.igv
    })
    await newShopping.save()

    const newProjections = new Projections({
      _id: new mongoose.Types.ObjectId(),
      sales: newSales._id,
      shopping: newShopping._id})
    await newProjections.save()

    const newTaxes = new Taxes({
      _id: new mongoose.Types.ObjectId(),
      of_the_period: taxes.of_the_period ,
      credit_in_favor: taxes.credit_in_favor,
      to_return: taxes.to_return ,
      monthly_rent: taxes.monthly_rent ,
      total: taxes.total
    })
    await newTaxes.save()

    const newReport = new Report({
      company: newCompany._id,
      period: period,
      exercise: exercise,
      icome: arrayIcome,
      projections: newProjections._id,
      taxes: newTaxes._id
    })
    await newReport.save()
    return res.status(201).json(newReport)
  }
}