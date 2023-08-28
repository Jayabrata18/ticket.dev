import { Request, Response, NextFunction } from "express";
import { NotAuthorisedError } from "../errors/nt-authrised-error";
export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    throw new NotAuthorisedError();
  }
  next();
};
