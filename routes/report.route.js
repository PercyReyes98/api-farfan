import { Router } from "express";
import { ReportController } from "../controllers/report.js";

export const reportRoute = Router()

reportRoute.get("/", ReportController.getAll)
reportRoute.post("/", ReportController.create)
