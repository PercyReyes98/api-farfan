import mongoose, { Schema } from "mongoose";

const empresaModel = new Schema ({
    ruc: {type: String, require: true},
    name: {type: String, require: true},
    periodo: {type: String, require: true},
    ejercicio: {type: String, require: true}
})

export default mongoose.model("Empresa",empresaModel)