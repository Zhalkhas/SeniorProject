import {DataTypes, Model, Sequelize} from 'sequelize';

export default class Weekday extends Model {};

export const init = (sequelize: Sequelize) => {
    Weekday.init({
        day: {
            type: DataTypes.ENUM,
            values: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
            ],
            allowNull: false,
            unique: true,
        },
    }, {
        timestamps: false,
        sequelize,
    });
};
