"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: process.env.PORT,
    db_host: process.env.DB_HOST,
    db_port: process.env.DB_PORT,
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
    jwt_secret: process.env.JWT_SECRET,
    jwt_expired: process.env.JWT_EXPIRED,
    seederStorage: 'json',
    seederStoragePath: 'sequelizeData.json',
});
//# sourceMappingURL=index.js.map