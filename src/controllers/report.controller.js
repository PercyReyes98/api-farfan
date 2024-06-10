import Report from '../models/report.model.js'

export const getReports = async (req, res) => {
    try {
        const reports = await Report.find()
        res.status(200).json(reports)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const getRucReport = async (req, res) => {
    try {
        const { company_ruc } = req.params
        const report = await Report.findOne({ company_ruc: { $regex: company_ruc, $options: 'i' } })
        if (report.length === 0) {
            return res.status(404).json({
                message: `Reporte con el ruc ${company_ruc} no encontrado`
            })
        }
        res.status(200).json(report)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const createReport = async (req, res) => {
    try {
        const { company_ruc, company_name, period, exercise, bcp_amount, interbank_amount, bbva_amount, icome_total, projection_sales_worth, projection_sales_igv, projection_sales_total, projection_shopping_worth, projection_shopping_igv, projection_shopping_total, taxes_of_the_period, taxes_credit_in_favor, taxes_to_return, taxes_monthly_rent, taxes_total } = req.body
        const newReport = new Report({
            company_ruc, company_name, period, exercise, bcp_amount, interbank_amount, bbva_amount, icome_total, projection_sales_worth, projection_sales_igv, projection_sales_total, projection_shopping_worth, projection_shopping_igv, projection_shopping_total, taxes_of_the_period, taxes_credit_in_favor, taxes_to_return, taxes_monthly_rent, taxes_total
        })
        await newReport.save()
        return res.status(201).json({
            message: 'Reporte creado con exito!'
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const updateReport = async (req, res) => {
    try {
        const report = await Report.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!report) {
            return res.status(404).json({
                message: `Reporte con el id ${req.params.id} no encontrado`
            })
        }
        res.status(200).json({
            message: 'Reporte actualizado con exito!',
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const deleteReport = async (req, res) => {
    try {
        const report = await  Report.findByIdAndDelete(req.params.id)
        if (!report) {
            return res.status(404).json({
                message : `Reporte con el id ${req.params.id} no encontrado`
            })
        }
        res.status(200).json({
            message: 'Reporte eliminado con exito!'
        })
        await report.s
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
