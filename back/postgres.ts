import { Type } from "typescript";
const {Pool}  = require("pg");

export class myDb {
    protected pool: any;
    constructor() {
        this.pool = new Pool({
            user: "postgres",
            host: "localhost",
            database: "db_typescript",
            password: "luiz1235",
            port: 5432
        }) 
    }
}

