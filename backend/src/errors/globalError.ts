import { NextFunction, Request, Response } from "express";

export const globalError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = 500;
  const message = "Internal Servier Error";

  res.status(status).json({
    success: false,
    message,
  });
};
