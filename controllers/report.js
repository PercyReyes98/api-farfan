import Report from '../models/report.js'

export class ReportController {
  static async getAll (req, res) {
        const data = await Report.find()

        return res.status(200).json(data);
  }
  static async create (req, res) {
    const {company_ruc,
    company_name,
    period,
    exercise,
    bcp_amount,
    interbank_amount,
    bbva_amount,
    icome_total,
    projection_sales_worth,
    projection_sales_igv,
    projection_sales_total,
    projection_shopping_worth,
    projection_shopping_igv,
    projection_shopping_total,
    taxes_of_the_period,
    taxes_credit_in_favor,
    taxes_to_return,
    taxes_monthly_rent,
    taxes_total} = req.body

    const newReport = new Report({
      company_ruc:company_ruc,
      company_name:company_name,
      period:period,
      exercise:exercise,
      bcp_amount:bcp_amount,
      interbank_amount:interbank_amount,
      bbva_amount:bbva_amount,
      icome_total: icome_total,
      projection_sales_worth:projection_sales_worth,
      projection_sales_igv:projection_sales_igv,
      projection_sales_total:projection_sales_total,
      projection_shopping_worth:projection_shopping_worth,
      projection_shopping_igv:projection_shopping_igv,
      projection_shopping_total:projection_shopping_total,
      taxes_of_the_period: taxes_of_the_period,
      taxes_credit_in_favor:taxes_credit_in_favor,
      taxes_to_return:taxes_to_return,
      taxes_monthly_rent:taxes_monthly_rent,
      taxes_total:taxes_total
    })
    await newReport.save()
    return res.status(201).json(newReport)
  }
}