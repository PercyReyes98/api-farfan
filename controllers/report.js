import CompanyModel from '../models/company.js'
import FinanceCompanyModel from '../models/financeCompany.js'

export class ReportController {
  static async getAll (req, res) {
        const data = await CompanyModel.find().populate('Bank')
        return res.status(200).json(data);
  }
  static async create (req, res) {
    const {ruc, name, period, exercise, bank} = req.body
    const financeCompany =  await FinanceCompanyModel.findById(bank)
    const newCompany = new Company({ ruc, name, period, exercise, bank: financeCompany });
    await newCompany.save();

    res.status(201).json(newCompany)
  }
}