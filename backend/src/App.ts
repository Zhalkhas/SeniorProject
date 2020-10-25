import express from 'express';

import initMiddlewares from './middlewares/init';

import passport from 'passport';

const app = express();

initMiddlewares(app);

app.get('/login',
    passport.authenticate('local', {
        session: true,
    },), ((req, res) => {
        res.sendStatus(200);
    })
);

export default app;
