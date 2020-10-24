import { Sequelize } from 'sequelize';

export default async (db: Sequelize) => {
    await db.sync({ force: true, alter: true });
};
