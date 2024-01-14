// import asyncHandler from "express-async-handler"
import { validationResult } from "express-validator"
import { generateToken } from "../middleware/set-token"
import User from "../model/user"
import asyncHandler from "express-async-handler"
import jwt from "jsonwebtoken"

//user registration
const registerUser = asyncHandler(async (req, res): Promise<any> => {
  // const { name, email, password, contact, address } = req.body

  const error = validationResult(req)

  if (!error.isEmpty()) {
    return res.status(400).json({
      message: error.array(),
    })
  }

  try {
    let user = await User.findOne({ email: req.body.email })

    if (user) {
      return res.status(200).json({ message: "User already exist" })
    }

    // user = await User.create({ name, email, password, contact, address })
    user = new User(req.body)
    await user.save()

    if (user) {
      generateToken(res, user)
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        contact: user.contact,
        address: user.address,
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: "something went wrong" })
  }
})

//user login
const loginUser = asyncHandler(async (req, res): Promise<any> => {
  const error = validationResult(req)
  if (!error.isEmpty()) {
    return res.status(400).json({
      message: error.array(),
    })
  }

  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({ message: "Invalid email address" })
    }

    const isPasswordMatch = await user?.matchPassword(password)
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid Password" })
    }

    if (user && isPasswordMatch) {
      generateToken(res, user)
      return res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        contact: user.contact,
        address: user.address,
      })
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" })
  }
})

export { registerUser, loginUser }
