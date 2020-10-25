import GroupModel from '../models/Group.model';

const getAllGroups = async (): Promise<GroupModel[]> => GroupModel.findAll();

const createGroup = async (groupData: any): Promise<GroupModel> => {
    const newGroup = GroupModel.build(groupData);
    await newGroup.validate();
    return newGroup.save();
};

const deleteGroup = async (groupId: string) => {
    const theGroup = await GroupModel.findOne({
        where: {
            id: groupId,
        }
    });

    if (!theGroup) throw new Error();

    await theGroup.destroy();
};

export default {
    getAllGroups,
    createGroup,
    deleteGroup,
};
