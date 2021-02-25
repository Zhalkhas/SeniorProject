import Router from 'express';

import Camera from "../models/Camera.model";
import CameraService from "../services/cameras-service";

const router = Router();

router.get('/', async (req, res) => {
    const cameras: Camera[] = await CameraService.getAllCameras();
    res.json(cameras);
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    if (!id) return res.sendStatus(400);
    try {
        const camera: Camera = await CameraService.getCameraByID(id);
        res.json(camera);
    } catch (err) {
        console.error(err);
        res.status(400).send(err.message);
    }
});

router.post('/', async (req, res) => {
    const cameraData = req.body;
    try {
        const result = await CameraService.createCamera(personData);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(400).send(err.message);
    }
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;

    if (!id) return res.sendStatus(400);

    const cameraData = req.body;
    try {
        const result = await CameraService.updateCamera(id, cameraData);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(400).send(err.message);
    }
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;

    if (!id) return res.sendStatus(400);

    try {
        await CameraService.deleteCamera(id);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.status(400).send(err.message);
    }
});

export default router;
