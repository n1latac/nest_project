require('dotenv').config();

module.exports = {
  development: {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    seederStorage: 'json',
    seederStoragePath: 'sequelizeData.json',
  },
};
