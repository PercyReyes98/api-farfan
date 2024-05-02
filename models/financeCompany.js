import { Schema, model } from "mongoose";

const FinanceCompanyModel = new Schema ({
    name: { type: String, require: true},
    ruc: { type: String, require: true}
})

export default model("FinanceCompany", FinanceCompanyModel)