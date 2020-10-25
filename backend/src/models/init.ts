import { Sequelize } from 'sequelize';

import { init as initGroupModel } from './Group.model';

export default async (db: Sequelize) => {
    initGroupModel(db);

    await db.sync({ force: true, alter: true });
};
