import { Schema } from 'mongoose'
import { ReportModel } from '../models/report.js'
//import { validateReport} from '../schemas/report.validation.js'
import reporte from '../schemas/report.report.js'
import empresaModel from '../schemas/report.empresa.js'
import impuestoModel from '../schemas/report.impuesto.js'
import ingresoModel from '../schemas/report.ingreso.js'
import proyeccionModel from '../schemas/report.proyeccion.js'
import reportReport from "../schemas/report.report.js"

export class ReportController {
  static async getAll (req, res) {
    const report = await ReportModel.getAll()
    res.json(report)
  }
  static async create (req, res) {
    const empresa = empresaModel(req.body)
    const ingresos = ingresoModel(req.body)
    const proyeccion = proyeccionModel(req.body)
    const impuesto = impuestoModel(req.body)
    const reporte = reportReport({empresa, ingresos, proyeccion, impuesto})
    if (!reporte.success) {
      return res.status(400)
    }

    const newReport = await ReportModel.create({ reporte })

    res.status(201).json(newReport)
  }
}