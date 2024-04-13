import express from "express"
import "./database/config.js"
import morgan from "morgan"
import cors from "cors"
import {dataRoute} from "./routes/form.route.js"

const app = express()
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.use("/form", dataRoute)
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`el servidor esta escuchando en el puerto ${PORT}`)
})