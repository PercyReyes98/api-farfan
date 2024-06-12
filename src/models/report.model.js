import { Schema, model } from "mongoose"
import { formatDate } from "../libs/formatDate.js"

const ReportModel = new Schema ({
    company_ruc: {
        type: String,
        require: true
    },
    company_name: {
        type: String,
        require: true
    },
    period: {
        type: String,
        require: true
    },
    exercise: {
        type: String,
        require: true
    },
    bcp_amount:{
        type: Number,
        require: true
    },
    interbank_amount: {
        type: Number,
        require: true
    },
    bbva_amount: {
        type: Number,
        require: true
    },
    icome_total:{
        type: Number,
        require: true
    },
    projection_sales_worth: {
        type: Number,
        require:true
    },
    projection_sales_igv: {
        type: Number,
        require:true
    },
    projection_sales_total:{
        type: Number,
        require: true
    },
    projection_shopping_worth: {
        type:Number,
        require: true
    },
    projection_shopping_igv: {
        type: Number,
        require: true
    },
    projection_shopping_total:{
        type: Number,
        require: true
    },
    taxes_of_the_period: {
        type: Number,
        require: true
    },
    taxes_credit_in_favor: {
        type: Number,
        require: true
    },
    taxes_to_return: {
        type: Number,
        require: true
    },
    taxes_monthly_rent: {
        type: Number,
        require: true
    },
    taxes_total: {
        type: Number,
        require: true
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

ReportModel.set('toJSON', {
    transform: (doc, ret) => {
        ret.createdAt = formatDate(ret.createdAt)
        ret.updatedAt = formatDate(ret.updatedAt)
        return ret
    }
})

export default model("Report", ReportModel)
