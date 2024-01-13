import React from "react"
import { Fragment, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import allRoutes from "./routes"
import Layout from "../layout"
import PrivateRoute from "./private-route"
import load from "../assets/bgloading.png"

interface IRoutes {
  path?: string
  component?: React.FC
  meta: {
    layout: boolean
    privateRoute?: boolean
  }
}

const MergedLayoutRoute = ({
  route,
  children,
}: {
  route: IRoutes
  children: React.ReactNode
}) => {
  const PrivateRouteWrapper = route.meta.privateRoute ? PrivateRoute : Fragment

  const AppLayoutWrapper = route?.meta?.layout ? Layout : Fragment

  return (
    <PrivateRouteWrapper>
      <AppLayoutWrapper>{children}</AppLayoutWrapper>
    </PrivateRouteWrapper>
  )
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {allRoutes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <MergedLayoutRoute route={route}>
                <Suspense
                  fallback={
                    <div className='flex w-full h-[100vh] items-center justify-center'>
                      <img
                        src={load}
                        alt='Logo'
                        className='w-[50px] object-contain'
                      />
                    </div>
                  }>
                  <route.component />
                </Suspense>
              </MergedLayoutRoute>
            }
          />
        ))}

        <Route
          path='*'
          element={
            <MergedLayoutRoute route={{ meta: { layout: true } }}>
              <p className='text-center text-3xl text-black'> Page Not Found</p>
            </MergedLayoutRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
