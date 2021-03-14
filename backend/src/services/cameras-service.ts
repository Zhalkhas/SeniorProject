import CameraModel from "../models/Camera.model";

import request from "request";

const getAllCameras = async (): Promise<CameraModel[]> => CameraModel.findAll();
const getCameraByID = async (id: string): Promise<CameraModel> => {
    const camera = await CameraModel.findOne({where: {id: id}});
    if (!camera) {
        throw new Error();
    }
    return camera;
}

const createCamera = async (camera: any): Promise<CameraModel> => {
    const newCamera = CameraModel.build(camera);
    await newCamera.validate();
    return newCamera.save();
}

const updateCamera = async (id: string, cameraUpdated: any): Promise<CameraModel> => {
    const camera = await CameraModel.findOne({where: {id: id}});
    if (!camera) {
        throw new Error();
    }
    return camera.update(cameraUpdated);
}

const deleteCamera = async (id: string) => {
    const camera = await CameraModel.findOne({where: {id: id}});
    if (!camera) {
        throw new Error();
    }
    return camera.destroy();
}
const getUnregisteredCameras = async (): Promise<String[]> => {
    let cameras: String[] = [];
    request('http://scanner:3060/cameras', (error, response, body) => {
        if (error != null) {
            return;
        }
        cameras = JSON.parse(body);
    });
    return cameras;
}

export default {
    getUnregisteredCameras,
    getAllCameras,
    getCameraByID,
    createCamera,
    updateCamera,
    deleteCamera,
};