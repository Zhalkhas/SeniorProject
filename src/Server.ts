import express from 'express';
import Config from './Config';

const app = express();

const start = async () => {
    app.listen(Config.EXPRESS_PORT, () => {
        console.log(`Backend is running on http://127.0.0.1:${Config.EXPRESS_PORT}`);
    })
};

start();
