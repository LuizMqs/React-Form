"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
const Login = require("./controllers/login");
router.post("/accounts/login", new Login().handler.bind(new Login()));
