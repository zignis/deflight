// noinspection SpellCheckingInspection
var deflight = function (middleware) {
    return function (req, res, next) {
        if ((req.method || '').toLowerCase() === 'options') {
            return next();
        }
        return middleware(req, res, next);
    };
};

export { deflight as default, deflight };
