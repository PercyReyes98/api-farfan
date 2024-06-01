import { Router } from "express";
import { ReportController } from "../controllers/report.js";

export const reportRoute = Router()

reportRoute.get("/", ReportController.getAll)
reportRoute.post("/create", ReportController.create)
reportRoute.get("/:company_ruc", ReportController.getId)
reportRoute.delete("/deleted/:id", ReportController.deleteId)
reportRoute.patch("/update/:id", ReportController.updateId)
