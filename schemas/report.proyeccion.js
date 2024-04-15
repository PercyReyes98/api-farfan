import { Schema, model } from "mongoose";

const proyeccionModel = new Schema ({
    empresa: { type: Schema.Types.ObjectId, ref: 'Empresa' },
    ventas: {type: Number, require: true},
    ventas_igv: {type: Number, require: true},
    ventas_total: {type: Number, require: true},
    adquiridas: {type: Number, require: true},
    adquiridas_igv: {type: Number, require: true},
    adquiridas_total: {type: Number, require: true}
})

export default model("Proyeccion",proyeccionModel)