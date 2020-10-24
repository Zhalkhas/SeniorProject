import Config from './Config';
import app from './App';

import sequelize from './db/Sequelize';
import initModels from './models/init';

const start = async () => {
    try {
        await sequelize.authenticate();
        await initModels(sequelize);

        app.listen(Config.EXPRESS_PORT, () => {
            console.log(`Backend is running on http://127.0.0.1:${Config.EXPRESS_PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to postgres', error);
        process.exit(1);
    }
};

start();
