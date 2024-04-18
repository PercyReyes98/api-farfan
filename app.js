import express from "express"
import dotenv from "dotenv";
import morgan from "morgan"
import cors from "cors"
import { conexion } from "./database/conection.js"
import {reportRoute} from "./routes/report.route.js"

const app = express()
dotenv.config();
conexion()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.use("/report", reportRoute)
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`el servidor esta escuchando en el puerto ${PORT}`)
})