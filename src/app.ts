import express, { type Application, type Request, type Response } from "express"
const app: Application = express()
import { pool } from "./db/index.js";
import { userRouter } from "./modules/users/user.route.js";
import { userProfile } from "./modules/profile/profile.route.js";
import { authRouter } from "./modules/auth/auth.route.js";

app.use(express.json())



app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!')

    const student = {
        name: "Umayer Ahmad",
        number: "0188********",
        year: 2026
    }

    res.status(200).json({
        succes: true,
        message: "Data retrived Successfully",
        data: student
    })
})

app.use("/api", userRouter)
app.use("/api/v1/profile", userProfile)
app.use("/api/v1/auth", authRouter)




export default app