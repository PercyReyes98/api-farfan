import mongoose from "mongoose"
import { MONGO_URI } from "../config/environment.js"

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("Connectado a MongoDB")
    } catch (error) {
        console.log(error)
    }
}
