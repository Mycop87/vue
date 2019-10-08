"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Error = /** @class */ (function () {
    function Error() {
        this.error = {
            error: {
                status: 400,
                message: 'some Error test',
            },
        };
    }
    Object.defineProperty(Error.prototype, "eObject", {
        get: function () {
            return __assign({}, this.error);
        },
        enumerable: true,
        configurable: true
    });
    Error.prototype.getEObject = function (status, message) {
        return __assign(__assign({}, this.error), { status: status,
            message: message });
    };
    return Error;
}());
exports.Error = Error;
module.exports = new Error();
