import { Schema, model } from "mongoose";

const ReportModel = new Schema ({
    company: {type: Schema.Types.ObjectId, ref: "Company", require: true},
    period: {type: String, require: true},
    exercise: {type: String, require: true},
    icome: [{ type: Schema.Types.ObjectId, ref: "Icome", require: true}],
    projections: { type: Schema.Types.ObjectId, ref: "Projections", require: true},
    taxes: { type: Schema.Types.ObjectId, ref: "Taxes", require: true}
})

export default model("Report", ReportModel)