import Weekday from '../models/Weekday.model';

const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

export default async () => await Weekday.bulkCreate(
    weekdays.map(day => new Object({ day }))
);
