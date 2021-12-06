
require('dotenv').config();

const { env } = process;

const config = {
    database: {
        'master': {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            connectionLimit: 10
        },
    }
};

module.exports = config;