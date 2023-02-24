import type { NextFunction, Request, Response } from 'express';
type Middleware = (req: Request, res: Response, next: NextFunction) => void;
export declare const deflight: <R extends Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, M extends Middleware>(middleware: M) => (req: R, res: Response, next: NextFunction) => void;
export default deflight;
