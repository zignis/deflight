/// <reference types="qs" />
import type { NextFunction, Request, Response } from 'express';
type Middleware<R extends Request> = (req: R, res: Response, next: NextFunction) => void;
export declare const deflight: <R extends Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>>(middleware: Middleware<R>) => (req: R, res: Response, next: NextFunction) => void;
export default deflight;
//# sourceMappingURL=index.d.ts.map