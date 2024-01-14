import { ErrorRequestHandler } from "express"
import createHttpError from "http-errors"

// const notFound = ({ req, res, next }: { req: any; res: any; next: any }) => {
//   const error = createHttpError(404, "Page Not found")

//   res.status(404)
//   next(error)
// }

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }

  res
    .status(err.statusCode || 500)
    .json({ message: err.message || "An Unknown Error" })
}

export { errorHandler }
