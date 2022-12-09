"use strict";
class SignUpValidator {
    constructor(email, name, password) {
        this.email = this.emailValidate(email);
        this.name = this.nameValidate(name);
        this.password = this.passwordValidate(password);
    }
    emailValidate(email) {
        const regex = /^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim;
        if (!regex.test(email)) {
            return "Email inválido";
        }
        return "";
    }
    nameValidate(name) {
        const regex = /^[a-z]{1,}$/gim;
        if (!regex.test(name)) {
            return "Nome inválido";
        }
        return "";
    }
    passwordValidate(password) {
        return "";
    }
}
module.exports = SignUpValidator;
