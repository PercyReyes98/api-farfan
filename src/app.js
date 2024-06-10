import express from "express"
import morgan from "morgan"
import cors from "cors"
import reportRoutes from "./routes/report.routes.js"

const app = express()

app.use(express.json())
app.use(cors("*"))
app.use(morgan("dev"))

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Bienvenido a la API de Estudio Farfan"
    })
})

app.use("/api/v1", reportRoutes)

export default app
