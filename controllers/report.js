import Company from '../models/Company.js'
import FinanceCompany from '../models/FinanceCompany.js'
import mongoose from 'mongoose';
import { validateCompany } from '../validation/company.validation.js';

export class ReportController {
  static async getAll (req, res) {
        const data = await Company.find().populate("financeCompany")
        return res.status(200).json(data);
  }
  static async create (req, res) {
    const {ruc, name, period, exercise, financeCompany} = req.body
    const financeComp = new FinanceCompany({
      _id: new mongoose.Types.ObjectId(),
      name: financeCompany.name,
      amount: financeCompany.amount
    })
    await financeComp.save()
    const newCompany = new Company({
      ruc: ruc,
      name: name,
      period: period,
      exercise: exercise,
      financeCompany: financeComp._id})
    await newCompany.save()

    return res.status(201).json(newCompany)
  }
}