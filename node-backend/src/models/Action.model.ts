import {DataTypes, Model, Sequelize} from 'sequelize';

export default class Action extends Model {};

export const init = (sequelize: Sequelize) => {
    Action.init({
        // TODO: fields of action
    }, {sequelize});
};
