import { Schema, model } from "mongoose";

const FinanceCompanyModel = new Schema ({
    name: { type: String, require: true},
    amount: { type: Number, require: true}
})

export default model("FinanceCompany", FinanceCompanyModel)