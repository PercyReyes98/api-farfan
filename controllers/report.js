import { Schema } from 'mongoose'
import { ReportModel } from '../models/report.js'
//import { validateReport} from '../schemas/report.validation.js'
import empresaModel from '../schemas/report.empresa.js'
import impuestoModel from '../schemas/report.impuesto.js'
import ingresoModel from '../schemas/report.ingreso.js'
import proyeccionModel from '../schemas/report.proyeccion.js'
export class ReportController {
  static async getAll (req, res) {
    const report = await ReportModel.getAll()
    res.json(report)
  }
  static async create (req, res) {
    const empresa = empresaModel()
    const impuesto = impuestoModel()
    const ingreso = ingresoModel()
    const proyeccion = proyeccionModel()
  

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newReport = await ReportModel.create({ input: result.data })

    res.status(201).json(newReport)
  }
}