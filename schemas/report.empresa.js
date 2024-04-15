import { Schema, model } from "mongoose";

const empresaModel = new Schema ({
    ruc: {type: String, require: true},
    name: {type: String, require: true},
    periodo: {type: String, require: true},
    ejercicio: {type: String, require: true}
})

export default model("Empresa",empresaModel)