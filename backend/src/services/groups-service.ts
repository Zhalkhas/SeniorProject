import GroupModel from '../models/Group.model';

const getAllGroups = async (): Promise<GroupModel[]> => GroupModel.findAll();

const createAGroup = async (groupData: any): Promise<GroupModel> => {
    const newGroup = GroupModel.build(groupData);
    await newGroup.validate();
    return newGroup.save();
};

export default {
    getAllGroups,
    createAGroup,
};
