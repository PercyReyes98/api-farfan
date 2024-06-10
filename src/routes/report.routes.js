import { Router } from "express"
import { createReport, deleteReport, getReports, getRucReport, updateReport } from "../controllers/report.controller.js"

const router = Router()

router.get("/report/get", getReports)
router.get("/report/get/:company_ruc", getRucReport)
router.post("/report/create", createReport)
router.patch("/report/update/:id", updateReport)
router.delete("/report/delete/:id", deleteReport)

export default router
