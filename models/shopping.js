import { Schema, model } from "mongoose";

const ShoppingModel = new Schema ({
    total: {type: Number, require: true},
    worth: {type: Number, require: true},
    igv: {type: Number, require: true}
},{
    timestamps:true
})

export default model("Shopping", ShoppingModel)