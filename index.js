import app from "./src/app.js"
import { connectDB } from "./src/config/database.js"
import { PORT } from "./src/config/environment.js"

async function main() {
    try {
        await connectDB()
        app.listen(PORT)
        console.log(`Servido Corriendo el puerto -> ${PORT}`)
    } catch (error) {
        console.error(error)
    }
}

main()
