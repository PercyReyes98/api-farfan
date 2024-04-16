import { conexion } from "../database/conection.js"
import mongoose from "mongoose"
import empresaModel from '../schemas/report.empresa.js'
import impuestoModel from '../schemas/report.impuesto.js'
import ingresoModel from '../schemas/report.ingreso.js'
import proyeccionModel from '../schemas/report.proyeccion.js'
import reportReport from "../schemas/report.report.js"

export class ReportModel {
  static async getAll () {
    await conexion()
    const reporte = await  reportReport.find().populate('Empresa', 'Ingresos', 'Proyeccion','Impuestos').exec()
    return reporte
      
  }
  static async create ({reporte}) {
    await conexion()
    const newEmpresa = await new empresaModel.create(reporte.empresa)
    const newIngresos = await new ingresoModel.create(reporte.ingresos) 
    const newProyeccion = await new proyeccionModel.create(reporte.proyeccion) 
    const newImpuesto = await new impuestoModel.create(reporte.impuesto)  
  
    
    return {
      newEmpresa,
      newIngresos,
      newProyeccion,
      newImpuesto
    }
  }
  }