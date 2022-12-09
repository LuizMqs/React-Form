"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = require("./router");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: `http://localhost:3000`,
    credentials: true,
}));
const PORT = 8000;
app.use(bodyParser.json());
app.use(cookieParser());
app.use(router_1.router);
app.get('/', (req, res) => {
    res.send('Welcome to typescript backend!');
});
app.listen(PORT, () => {
    console.log('The application is listening on port http://localhost: ' + PORT);
});
