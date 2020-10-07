import Config from './Config';
import app from './App';

const start = async () => {
    app.listen(Config.EXPRESS_PORT, () => {
        console.log(`Backend is running on http://127.0.0.1:${Config.EXPRESS_PORT}`);
    })
};

start();
