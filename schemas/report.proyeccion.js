import mongoose, { Schema } from "mongoose";

const proyeccionModel = new Schema ({
    ventas: {type: Number, require: true},
    ventas_igv: {type: Number, require: true},
    ventas_total: {type: Number, require: true},
    adquiridas: {type: Number, require: true},
    adquiridas_igv: {type: Number, require: true},
    adquiridas_total: {type: Number, require: true}
})

export default mongoose.model("Proyeccion",proyeccionModel)