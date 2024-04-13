import { Router, json } from "express";
import { FormController } from "../controllers/form.js";

export const dataRoute = Router()

dataRoute.get("/", FormController.getAll)
dataRoute.post("/", FormController.create)
