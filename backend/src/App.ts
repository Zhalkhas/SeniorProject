import express from 'express';

import initMiddlewares from './middlewares/init';

import GroupsController from './controllers/groups-controller';
import AuthController from './controllers/auth-controller';
import PersonsController from './controllers/groups-controller';

const apiRootRouter = express.Router();

const app = express();

initMiddlewares(app);

apiRootRouter.use('/auth', AuthController);
apiRootRouter.use('/groups', GroupsController);
apiRootRouter.use('/persons', PersonsController);

app.use('/api', apiRootRouter);

export default app;
