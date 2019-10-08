"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserService = require('../services/user.service');
var ObjectID = require('mongodb').ObjectID;
var UsersController = /** @class */ (function () {
    function UsersController() {
    }
    UsersController.prototype.getUsers = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!req.query.id) return [3 /*break*/, 2];
                        return [4 /*yield*/, UserService.getUserById(req.query.id)];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            return [2 /*return*/, res.status(200).send(user)];
                        }
                        else {
                            return [2 /*return*/, res.status(404).send({ message: 'User not found.' })];
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, UserService.getUsers()];
                    case 3:
                        result = _a.sent();
                        if (result) {
                            return [2 /*return*/, res.status(200).send(result)];
                        }
                        else {
                            return [2 /*return*/, res.status(500)
                                    .send({ message: 'Unable create user.' })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersController.prototype.createUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!req.body) return [3 /*break*/, 2];
                        return [4 /*yield*/, UserService.createUser(req.body)];
                    case 1:
                        result = _a.sent();
                        if (!result.error) {
                            return [2 /*return*/, res.status(200).send(result)];
                        }
                        else {
                            return [2 /*return*/, res.status(result.error.status).send({ message: result.error.message })];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    UsersController.prototype.updateUser = function (req, res) { };
    UsersController.prototype.deleteUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var data, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!req.query.id) return [3 /*break*/, 2];
                        data = { _id: ObjectID(req.query.id) };
                        return [4 /*yield*/, UserService.deleteUser(data)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            return [2 /*return*/, res.status(200).send(result)];
                        }
                        else {
                            return [2 /*return*/, res.status(500).send({ message: 'can not delete user ' })];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return UsersController;
}());
module.exports = new UsersController();
