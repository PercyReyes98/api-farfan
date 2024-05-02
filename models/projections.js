import { Schema, model } from "mongoose";

const ProjectionsModel = new Schema ({
    sales: {type: Schema.Types.ObjectId, ref: "Sales", require: true},
    shopping: {type: Schema.Types.ObjectId, ref: "Shopping", require: true}
},{
    timestamps: true
})

export default model("Projections", ProjectionsModel)
