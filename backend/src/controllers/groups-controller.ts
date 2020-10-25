import express from 'express';

import GroupsService from '../services/groups-service';
import Group from '../models/Group.model';

const router = express.Router();

router.get('/', async (req, res) => {
    const groups: Group[] = await GroupsService.getAllGroups();
    res.json(groups);
});

export default router;
