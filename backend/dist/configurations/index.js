"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process = require("node:process");
exports.default = () => ({
    port: process.env.PORT,
    db_host: process.env.DB_HOST,
    db_port: process.env.DB_PORT,
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
    jwt_secret: process.env.JWT_SECRET,
    jwt_expired: process.env.JWT_EXPIRED,
});
//# sourceMappingURL=index.js.map