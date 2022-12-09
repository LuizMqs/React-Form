import express  from "express";
import cors from "cors"
import {router} from "./router"
const bodyParser = require("body-parser");

const cookieParser = require('cookie-parser')

const app = express();
app.use(cors({
    origin : `http://localhost:3000`,
    credentials: true,
  }))
const PORT:Number = 8000;

app.use(bodyParser.json())
app.use(cookieParser())
app.use(router)


app.get('/', (req, res) => {
    res.send('Welcome to typescript backend!');
})

app.listen(PORT, () => {
    console.log('The application is listening on port http://localhost: ' + PORT);
})