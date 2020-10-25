import express from 'express';

import GroupsService from '../services/groups-service';
import Group from '../models/Group.model';

const router = express.Router();

router.get('/', async (req, res) => {
    const groups: Group[] = await GroupsService.getAllGroups();
    res.json(groups);
});

router.post('/', async (req, res) => {
    const groupData = req.body;
    try {
        const result = await GroupsService.createAGroup(groupData);
        res.json(result);
    } catch (err) {
        console.error(err.stack);
        res.status(400).send(err.message);
    }
});

export default router;
