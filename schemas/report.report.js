import mongoose, { Schema, model } from "mongoose"

const reporte = new Schema ({
    empresa: { type: Schema.Types.ObjectId, ref: 'Empresa' },
    ingreso: { type: Schema.Types.ObjectId, ref: 'Ingreso' },
    proyeccion: { type: Schema.Types.ObjectId, ref: 'Proyeccion' },
    impuesto: { type: Schema.Types.ObjectId, ref: 'Impuesto' }

})
export default mongoose.model("Reporte", reporte)