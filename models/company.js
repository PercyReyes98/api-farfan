import { Schema, model } from "mongoose";

const CompanyModel = new Schema ({
    ruc: {type: String, require: true},
    name: {type: String, require: true}
})

export default model("Company", CompanyModel)