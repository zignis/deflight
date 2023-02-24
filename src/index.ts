import type { NextFunction, Request, Response } from 'express';

type Middleware<R extends Request> = (
  req: R,
  res: Response,
  next: NextFunction,
) => void;

// noinspection SpellCheckingInspection
export const deflight =
  <R extends Request>(middleware: Middleware<R>) =>
  (req: R, res: Response, next: NextFunction) => {
    if ((req.method || '').toLowerCase() === 'options') {
      return next();
    }

    return middleware(req, res, next);
  };

export default deflight;
