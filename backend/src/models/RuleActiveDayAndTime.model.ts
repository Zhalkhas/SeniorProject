import {DataTypes, Model, Sequelize} from 'sequelize';

export default class RuleActiveDayAndTime extends Model {};

export const init = (sequelize: Sequelize) => {
    RuleActiveDayAndTime.init({
        startTime: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        endTime: {
            type: DataTypes.TIME,
            allowNull: false,
        },
    }, {
        timestamps: false,
        sequelize,
    });
};
