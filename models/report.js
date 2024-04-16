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
  static async create (data) {
    
    await conexion();
    const empresa = new empresaModel({
      _id: new mongoose.Types.ObjectId(),
      ...data.empresa
    });
  
    await empresa.save();
  
    const ingresos = new ingresoModel({
      empresa: empresa._id,
      ...data.ingresos
    })
    const proyeccion = new proyeccionModel({
      empresa: empresa._id,
      ...data.proyeccion
    })
    const impuestos = new impuestoModel({
      empresa: empresa._id,
      ...data.impuestos
    })
  
    await Promise.all([ ingresos.save(), proyeccion.save(),impuestos.save()]);
  
    return empresa;
  };
  }