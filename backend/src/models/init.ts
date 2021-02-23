import {Sequelize} from 'sequelize';

import {init as initUserModel} from './User.model';
import Person, {init as initPersonModel} from './Person.model';
import Rule, {init as initRuleModel} from './Rule.model';
import RulesToCameras, {init as initRulesToCamerasModel} from './RulesToCameras.model';
import Camera, {init as initCameraModel} from './Camera.model';
import Action, {init as initActionModel} from './Action.model';
import RuleActiveDayAndTime, {init as initRuleActiveDayAndTimeModel} from './RuleActiveDayAndTime.model';
import Weekday, {init as initWeekdayModel} from './Weekday.model';

import userMigrations from '../migrations/User.migrations';
import weekdayMigrations from '../migrations/Weekday.migrations';

export default async (db: Sequelize) => {
    initUserModel(db);
    initPersonModel(db);
    initRuleModel(db);
    initCameraModel(db);
    initRulesToCamerasModel(db);
    initActionModel(db);
    initRuleActiveDayAndTimeModel(db);
    initWeekdayModel(db);

    setupAssociations();

    await db.sync({force: true});

    await userMigrations();
    await weekdayMigrations();
};

const setupAssociations = () => {
    Person.hasMany(Rule);
    Rule.belongsTo(Person);

    Rule.belongsToMany(Camera, { through: RulesToCameras });
    Camera.belongsToMany(Rule, { through: RulesToCameras });

    Rule.belongsTo(Action);
    Action.hasMany(Rule);

    Rule.belongsToMany(Weekday, { through: RuleActiveDayAndTime });
    Weekday.belongsToMany(Rule, { through: RuleActiveDayAndTime });
};
