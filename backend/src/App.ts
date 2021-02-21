import express from 'express';

import initMiddlewares from './middlewares/init';

import AuthController from './controllers/auth-controller';
import PersonsController from './controllers/persons-controller';

const apiRootRouter = express.Router();

const app = express();

initMiddlewares(app);

apiRootRouter.use('/auth', AuthController);
apiRootRouter.use('/persons', PersonsController);

app.use('/api', apiRootRouter);

export default app;
