import { Schema, model } from "mongoose";

const TaxesModel = new Schema ({
    of_the_period: {type: Number, require: true},
    credit_in_favor: {type: Number, require: true},
    to_return: {type: Number, require: true},
    monthly_rent: {type: Number, require: true},
    total: {type: Number, require: true}
},{
    timestamps:true
})

export default model("Taxes", TaxesModel)