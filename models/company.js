import { Schema, model } from "mongoose";

const CompanyModel = new Schema ({
    ruc: {type: String, require: true},
    name: {type: String, require: true},
    period: {type: String, require: true},
    exercise: {type: String, require: true},
    financeCompany: [{ type: Schema.Types.ObjectId, ref: "FinanceCompany", require: true}]
})

export default model("Company", CompanyModel)