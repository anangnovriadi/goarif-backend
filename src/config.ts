require('dotenv').config();

import { Sequelize } from 'sequelize';

const host = process.env.DB_HOST as string || 'localhost';
const username = process.env.DB_USERNAME as string || 'postgres';
const password = process.env.DB_PASSWORD as string || 'postgres';
const name = process.env.DB_NAME as string || 'db_transcribe';

const sequelize = new Sequelize(name, username, password, {
    host: host,
    dialect: "postgres",
    dialectOptions: {
        useUTC: false,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000000000
    },
    timezone: '+07:00',
    // logging: console.log,
});

export { 
    Sequelize,
    sequelize
};
