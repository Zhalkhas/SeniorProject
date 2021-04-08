import {DataTypes, Model, Sequelize} from 'sequelize';

export default class User extends Model {}

export const init = (sequelize: Sequelize) => {
    User.init({
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {sequelize})
}