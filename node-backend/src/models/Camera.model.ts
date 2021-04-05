import {DataTypes, Model, Sequelize} from 'sequelize';

export default class Camera extends Model {};

export const init = (sequelize: Sequelize) => {
    Camera.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        streamURL: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {sequelize});
};
