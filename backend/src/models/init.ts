import {Sequelize} from 'sequelize';

import {init as initGroupModel} from './Group.model';
import {init as initUserModel} from './User.model';
import {init as initPersonModel} from './Person.model';
import userMigrations from '../migrations/User.migrations';

export default async (db: Sequelize) => {
    initUserModel(db);
    initGroupModel(db);
    initPersonModel(db);

    await db.sync({force: true, alter: true});

    await userMigrations();
};
