import {DataTypes, Model, Sequelize} from 'sequelize';

export default class Group extends Model {};

export const init = (sequelize: Sequelize) => {
    Group.init({
        name: {
            allowNull: false,
            unique: true,
            type: DataTypes.TEXT,
        },
    }, { sequelize });
};
