import {myDb} from '../postgres'
import { Request, Response } from 'express';

class Login extends myDb {
    #signUpValidate = require("../validator")

    async handler(req: Request, res: Response) {
        try {
            const emailValidate = await new this.#signUpValidate().emailValidate(req.body.email);
            const passwordValidate = await new this.#signUpValidate().passwordValidate('', req.body.password)
            console.log(emailValidate, passwordValidate)
            if (emailValidate == "" && passwordValidate == "") {

                const email = await this.pool.query(`
          SELECT id FROM accounts WHERE email = $1 AND password = $2;
            `, [req.body.email,
                req.body.password]);

                if (email.rows.length == 0) {
                    console.log("incorreto")
                    res.json('Email ou senha incorretos')
                } else {
                    console.log("usuario encontrado")
                    res.cookie('userSession', req.body, { maxAge: 900000, httpOnly: true }).json({ message: 'user entered successfully', data:"email:" + req.body.email + " pass:" + req.body.password })
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    }
}

module.exports = Login;