"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deflight = void 0;
// noinspection SpellCheckingInspection
var deflight = function (middleware) {
    return function (req, res, next) {
        if ((req.method || '').toLowerCase() === 'options') {
            return next();
        }
        return middleware(req, res, next);
    };
};
exports.deflight = deflight;
exports.default = exports.deflight;
//# sourceMappingURL=index.js.map