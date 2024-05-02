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
        const data = await Report.find().populate("company").populate("icome").populate("projections").populate("taxes")
        return res.status(200).json(data);
  }
  static async create (req, res) {
    const {company, period, exercise, icome, projections, taxes} = req.body

    const newCompany = new Company({
      _id: new mongoose.Types.ObjectId(),
      name: company.name,
      ruc: company.ruc
    })
    await newCompany.save()

    const newFinanceCompany = new FinanceCompany({
      _id: new mongoose.Types.ObjectId(),
      name: icome.financeCompany.name,
      ruc: icome.financeCompany.ruc
    })
    await newFinanceCompany.save()

    const newIcome = new Icome({
      _id: new mongoose.Types.ObjectId(),
      financeCompany: icome.financeCompany._id,
      amount: icome.amount
    })
    await newIcome.save()

    const newSales = new Sales({
      _id: new mongoose.Types.ObjectId(),
      total: projections.sales.total,
      worth: projections.sales.worth,
      igv: projections.sales.igv
    })
    await newSales.save()

    const newShopping = new Shopping({
      _id: new mongoose.Types.ObjectId(),
      total: projections.shopping.total,
      worth: projections.shopping.worth,
      igv: projections.shopping.igv
    })
    await newShopping.save()

    const newProjections = new Projections({
      _id: new mongoose.Types.ObjectId(),
      sales: projections.sales._id,
      shopping: projections.shopping._id})
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
      company: company._id,
      period: period,
      exercise: exercise,
      icome: [icome._id],
      projections: projections._id,
      taxes: taxes._id
    })
    await newReport.save
    return res.status(201).json(newReport)
  }
}