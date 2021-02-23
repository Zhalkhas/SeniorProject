import {Model, Sequelize} from 'sequelize';

export default class RulesToCameras extends Model {};

export const init = (sequelize: Sequelize) => {
    RulesToCameras.init({}, {sequelize});
};
