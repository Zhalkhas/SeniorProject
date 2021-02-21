import {Model, Sequelize} from 'sequelize';

export default class RulesToCamerasModel extends Model {};

export const init = (sequelize: Sequelize) => {
    RulesToCamerasModel.init({}, {sequelize});
};
