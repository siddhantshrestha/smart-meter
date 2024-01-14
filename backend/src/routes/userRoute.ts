import express from "express"
const router = express.Router()
import { loginUser, registerUser } from "../controller/userController"
import { check } from "express-validator"

router.post(
  "/register",
  [
    check("name", "Name is required").isString(),
    check("password", "Password must be greater than 8 0r more").isLength({
      min: 8,
    }),
    check("email", "Email is required").isEmail(),
    check("contact", "Contact is required").isNumeric(),
    check("address", "Address is required").isString(),
  ],
  registerUser
)
router.post(
  "/login",
  [
    check(
      "password",
      "Password must be greater than 8 and invalid password"
    ).isLength({
      min: 8,
    }),
    check("email", "Email is required").isEmail(),
  ],
  loginUser
)

export default router
