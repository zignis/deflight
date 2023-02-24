'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// noinspection SpellCheckingInspection
var deflight = function (middleware) {
    return function (req, res, next) {
        if ((req.method || '').toLowerCase() === 'options') {
            return next();
        }
        return middleware(req, res, next);
    };
};

exports.default = deflight;
exports.deflight = deflight;
