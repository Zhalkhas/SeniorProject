import User from '../models/User.model';

export default async () => await User.create({
    login: 'admin',
    password: 'admin',
});
