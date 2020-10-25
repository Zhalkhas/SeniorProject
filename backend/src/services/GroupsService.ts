import GroupModel from '../models/Group.model';

const getAllGroups = async (): Promise<GroupModel[]> => GroupModel.findAll();

export default {
    getAllGroups,
};
