// import { lazy } from "react"
import Dashboard from "@/pages/dashboard/index"

// const Dashboard = lazy(() => import("@/pages/dashboard"))

interface IAppRoutes {
  path: string
  component: React.FC
  meta: {
    layout: boolean
    privateRoute: boolean
  }
}

const appRoutes: IAppRoutes[] = [
  {
    path: "/",
    component: Dashboard,
    meta: {
      layout: true,
      privateRoute: true,
    },
  },
]

export default appRoutes
