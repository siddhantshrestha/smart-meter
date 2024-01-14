import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import userRoutes from "./routes/userRoute"
import connectDB from "./config/db"
import { errorHandler } from "./middleware/errorMiddleware"
// import createHttpError from "http-errors"

dotenv.config()

const PORT = process.env.PORT || 8000

connectDB()

const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

// app.use(notFound)
app.use(errorHandler)

app.use("/api/users", userRoutes)

// app.get("/", (req, res) => {
//   res.send("Hello world!")
// })

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
