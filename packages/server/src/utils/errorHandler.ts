import { NextFunction, Request, RequestHandler, Response } from 'express';

type AsyncHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<Error | any>;

/*
  Catch Errors Handler
  With async/await, you need some way to catch errors
  Instead of using try{} catch(e) {} in each controller, we wrap the function in
  catchErrors(), catch and errors they throw, and pass it along to our express middleware with next()
*/
function catchErrors(fn: AsyncHandler): RequestHandler {
  return function (req, res, next) {
    return fn(req, res, next).catch(next);
  };
}

/*
  Not Found Error Handler
  If we hit a route that is not found, we mark it as 404 and pass it along to the next error handler to display
*/
interface HttpError extends Error {
  status: number;
  message: string;
}

function notFound(req: Request, res: Response, next: NextFunction) {
  const error = new Error(`Not found - ${req.originalUrl}`) as HttpError;
  error.status = 404;
  next(error);
}

/*
  Development Error Hanlder
  In development we show good error messages or any other previously un-handled error, we can show good info on what happened
*/

function handleDevErrors(err: HttpError, res: Response) {
  const status = err.status || res.statusCode === 200 ? 500 : res.statusCode;

  res.status(status).json({
    status,
    message: err.message,
    error: err,
    stack: err.stack || '',
  });
}

/*
  Production Error Hanlder
  No stacktraces are leaked to user
*/
function handleProdErrors(res: Response) {
  res
    .status(500)
    .json({ status: 500, message: 'Ooops! Something went wrong!' });
}

function globalErrorHandler(
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (process.env.NODE_ENV === 'production') {
    handleProdErrors(res);
  } else {
    handleDevErrors(err, res);
  }
}

export { catchErrors, globalErrorHandler, notFound };
