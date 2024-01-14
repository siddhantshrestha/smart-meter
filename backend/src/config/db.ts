import mongoose from "mongoose"
import createHttpError from "http-errors"

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL! as string)
    console.log(`MongoDB Connected : ${connect.connection.host}`)
  } catch {
    throw createHttpError(501, "Unable to connect database")

  }
}
export default connectDB
