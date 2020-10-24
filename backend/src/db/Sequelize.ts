import { Sequelize } from 'sequelize';

import Config from '../Config';

const db = new Sequelize(
    Config.DB_NAME,
    Config.DB_USERNAME,
    Config.DB_PASSWORD, {
        host: Config.DB_HOST,
        dialect: 'postgres',
    },
);

export default db;
