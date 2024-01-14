import { InferSchemaType, Schema, model } from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8)
  }
  next()
})

userSchema.methods.matchPassword = async function (enteredPassword: any) {
  return await bcrypt.compare(enteredPassword, this.password)
}

interface IUserSchema extends Document {
  name: string
  contact: number
  email: string
  password: string
  address: string
  matchPassword: (enteredPassword: string) => Promise<boolean>
}

type UserModel = InferSchemaType<typeof userSchema> & IUserSchema

export default model<UserModel>("User", userSchema)
