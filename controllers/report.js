import { Schema } from 'mongoose'
import { ReportModel } from '../models/report.js'
//import { validateReport} from '../schemas/report.validation.js'
import reporte from '../schemas/report.report.js'

export class ReportController {
  static async getAll (req, res) {
    const report = await ReportModel.getAll()
    res.json(report)
  }
  static async create (req, res) {
    const result = reporte(req.body)
    if (!result.success) {
      return res.status(400)
    }

    const newReport = await ReportModel.create({ input: result.data })

    res.status(201).json(newReport)
  }
}