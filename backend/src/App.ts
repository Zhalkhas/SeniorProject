import express from 'express';

import initMiddlewares from './middlewares/init';

import GroupsController from './controllers/groups-controller';
import AuthController from './controllers/auth-controller';

const apiRootRouter = express.Router();

const app = express();

initMiddlewares(app);

apiRootRouter.use('/auth', AuthController);
apiRootRouter.use('/groups', GroupsController);

app.use('/api', apiRootRouter);

export default app;
