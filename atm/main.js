#!/usr/bin/env node
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var inquirer_1 = require("inquirer");
var balance = Math.floor((Math.random() * 100000));
var answers1;
var answers2;
function getUserID() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            type: "input",
                            name: "userID",
                            message: "Please enter your User ID: "
                        },
                        {
                            type: "number",
                            name: "userPin",
                            message: "Please enter your PIN: "
                        },
                        {
                            type: "list",
                            name: "accountType",
                            choices: ["Current", "Saving"],
                            message: "Please select account type: "
                        },
                    ])];
                case 1:
                    answers1 = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getTransaction() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            type: "list",
                            name: "transType",
                            choices: ["Fast Cash", "Withdraw"],
                            message: "Please select transaction type: ",
                        },
                        {
                            type: "list",
                            name: "amount",
                            choices: [5000, 10000, 15000, 20000, 25000],
                            message: "Please select your amount (Current Balance is ".concat(balance, "): "),
                            when: function (answers2) {
                                return answers2.transType == "Fast Cash";
                            }
                        },
                        {
                            type: "number",
                            name: "amount",
                            message: "Please enter your amount (Current Balance is ".concat(balance, "): "),
                            when: function (answers2) {
                                return answers2.transType == "Withdraw";
                            }
                        }
                    ])];
                case 1:
                    answers2 = _a.sent();
                    if (answers1.userID && answers1.userPin) {
                        if (answers2.amount <= balance) {
                            balance -= answers2.amount;
                            console.log("Your current balance is: ".concat(balance));
                        }
                        else {
                            console.log("Insuficient balance ".concat(balance));
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function startLoop() {
    return __awaiter(this, void 0, void 0, function () {
        var again;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getUserID()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [4 /*yield*/, getTransaction()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                type: "checkbox",
                                name: "restart",
                                choices: ['Yes', 'No'],
                                message: "Do you want to continue: ",
                            }
                        ])];
                case 4:
                    again = _a.sent();
                    _a.label = 5;
                case 5:
                    if (again.restart == 'Yes') return [3 /*break*/, 2];
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}
startLoop();
