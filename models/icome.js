import { Schema, model } from "mongoose";

const IcomeModel = new Schema ({
    financeCompany: {type: Schema.Types.ObjectId, ref: "FinanceCompany", require: true},
    amount: { type: Number, require: true}
},{
    timestamps:true
})

export default model("Icome", IcomeModel)