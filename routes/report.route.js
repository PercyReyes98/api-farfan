import { Router } from "express";
import { ReportController } from "../controllers/report.js";

export const reportRoute = Router()

reportRoute.get("/", ReportController.getAll)
reportRoute.post("/create", ReportController.create)
reportRoute.get("/:company_ruc", ReportController.getId)
