import { Schema, model } from "mongoose";

const impuestosModel = new Schema ({
    empresa: { type: Schema.Types.ObjectId, ref: 'Empresa' },
    igv_del_periodo: {type: Number, require: true},
    credito_a_favor_anterior: {type: Number, require: true},
    igv_por_devolver: {type: Number, require: true},
    impuesto_a_la_renta: {type: Number, require: true},
    total_impuesto: {type: Number, require}
})

export default model("Impuestos",impuestosModel)