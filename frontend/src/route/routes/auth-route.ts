import { lazy } from "react"
const Login = lazy(() => import("@/pages/auth/login"))
const SignUp = lazy(() => import("@/pages/auth/signup"))

interface IAuthRoutes {
  path: string
  component: React.FC
  meta: {
    layout: boolean
    privateRoute: boolean
  }
}

const authRoutes: IAuthRoutes[] = [
  {
    path: "/login",
    component: Login,
    meta: {
      layout: false,
      privateRoute: false,
    },
  },
  {
    path: "/signup",
    component: SignUp,
    meta: {
      layout: false,
      privateRoute: false,
    },
  },
]

export default authRoutes
