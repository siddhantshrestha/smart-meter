import jwt from "jsonwebtoken"

export const generateToken = (res: any, user: any) => {
  const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY as string, {
    expiresIn: "30d",
  })

  res.cookie("auth-token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60,
  })
}
