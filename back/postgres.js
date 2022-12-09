"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDb = void 0;
const { Pool } = require("pg");
class myDb {
    constructor() {
        this.pool = new Pool({
            user: "postgres",
            host: "localhost",
            database: "db_typescript",
            password: "luiz1235",
            port: 5432
        });
    }
}
exports.myDb = myDb;
