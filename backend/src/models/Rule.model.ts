import {DataTypes, Model, Sequelize} from 'sequelize';

export default class Rule extends Model {};

export const init = (sequelize: Sequelize) => {
    Rule.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {sequelize});
};
