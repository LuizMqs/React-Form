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
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Login_signUpValidate;
Object.defineProperty(exports, "__esModule", { value: true });
const postgres_1 = require("../postgres");
class Login extends postgres_1.myDb {
    constructor() {
        super(...arguments);
        _Login_signUpValidate.set(this, require("../validator"));
    }
    handler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const emailValidate = yield new (__classPrivateFieldGet(this, _Login_signUpValidate, "f"))().emailValidate(req.body.email);
                const passwordValidate = yield new (__classPrivateFieldGet(this, _Login_signUpValidate, "f"))().passwordValidate('', req.body.password);
                console.log(emailValidate, passwordValidate);
                if (emailValidate == "" && passwordValidate == "") {
                    const email = yield this.pool.query(`
          SELECT id FROM accounts WHERE email = $1 AND password = $2;
            `, [req.body.email,
                        req.body.password]);
                    if (email.rows.length == 0) {
                        console.log("incorreto");
                        res.json('Email ou senha incorretos');
                    }
                    else {
                        console.log("usuario encontrado");
                        res.cookie('userSession', req.body, { maxAge: 900000, httpOnly: true }).json({ message: 'user entered successfully', data: "email:" + req.body.email + " pass:" + req.body.password });
                    }
                }
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
_Login_signUpValidate = new WeakMap();
module.exports = Login;
