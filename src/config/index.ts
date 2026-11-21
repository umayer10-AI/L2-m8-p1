import path from "path"
import dotenv from "dotenv"

dotenv.config({
    path: path.join(process.cwd(), ".env")
})

const config = {
    port: process.env.PORT,
    connecting_String: process.env.DATABASE_URL,
}

export default config