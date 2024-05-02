import { Schema, model } from "mongoose";

const SalesModel = new Schema ({
    total: {type: Number, require: true},
    worth: {type: Number, require: true},
    igv: {type: Number, require: true}
},{
    timestamps: true
})

export default model("Sales", SalesModel)
