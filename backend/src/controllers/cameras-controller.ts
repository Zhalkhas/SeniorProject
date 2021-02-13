import express from 'express';

import CamerasService from '../services/cameras-service';
import Camera from "../models/Camera.model";

const router = express.Router();

router.get('/', async (req, res) => {
    const cameras: Camera[] = CamerasService.getAllCameras();
    res.json(cameras);
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;

    if (!id) return res.sendStatus(400);
    try {
        const camera: Camera = await CamerasService.getPersonByID(id);
        res.json(camera);
    } catch (err) {
        console.error(err);
        res.status(400).send(err.message);
    }
});

router.post('/', async (req, res) => {
    const cameraData = req.body;
    try {
        const result = await CamerasService.createCamera(cameraData);
        res.json(result);
    } catch (err) {
        console.error(err.stack);
        res.status(400).send(err.message);
    }
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;

    if (!id) return res.sendStatus(400);

    const cameraData = req.body;
    try {
        const result = await CamerasService.updatePerson(id, cameraData);
        res.json(result);
    } catch (err) {
        console.error(err.stack);
        res.status(400).send(err.message);
    }
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;

    if (!id) return res.sendStatus(400);

    try {
        await CamerasService.deletePerson(id);
        res.sendStatus(200);
    } catch (err) {
        console.error(err.stack);
        res.status(400).send(err.message);
    }
});

export default router;
