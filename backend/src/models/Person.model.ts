import {DataTypes, Model, Sequelize} from 'sequelize';

export default class Person extends Model {};

export const init = (sequelize: Sequelize) => {
    Person.init({
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {sequelize});
}
