import { Router } from "express";

const router: Router = Router()
const Login = require("./controllers/login")

router.post("/accounts/login", new Login().handler.bind(new Login()))

export { router };