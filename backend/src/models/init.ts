import {Sequelize} from 'sequelize';

import {init as initUserModel} from './User.model';
import Person, {init as initPersonModel} from './Person.model';
import Rule, {init as initRuleModel} from './Rule.model';
import RulesToCamerasModel, {init as initRulesToCamerasModel} from './RulesToCameras.model';
import Camera, {init as initCameraModel} from './Camera.model';

import userMigrations from '../migrations/User.migrations';

export default async (db: Sequelize) => {
    initUserModel(db);
    initPersonModel(db);
    initRuleModel(db);
    initCameraModel(db);
    initRulesToCamerasModel(db);

    setupAssociations();

    await db.sync({force: true, alter: true});

    await userMigrations();
};

const setupAssociations = () => {
    Person.hasMany(Rule);
    Rule.belongsTo(Person);

    Rule.belongsToMany(Camera, { through: RulesToCamerasModel });
    Camera.belongsToMany(Rule, { through: RulesToCamerasModel });

    // TODO: Rule is missing action
    // TODO: RulesToDays table
};
