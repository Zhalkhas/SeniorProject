import UserModel from '../models/User.model';

const checkPassword = async (username: string, password: string): Promise<boolean> => {
    let user = await UserModel.findOne({where: {login: username}});
    if (!user) {
        return false;
    }
    return user.getDataValue('password') === password;
}

export default {
    checkPassword,
}