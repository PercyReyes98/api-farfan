import mongoose, { Schema } from "mongoose";

const ingresosModel = new Schema ({
    empresa: { type: Schema.Types.ObjectId, ref: 'Empresa' },
    bcp: {type: Number, require: true},
    bbva: {type: Number, require: true},
    interbank: {type: Number, require: true},
    total_ingreso: {type: Number, require: true}
})

export default mongoose.model("Ingresos",ingresosModel)