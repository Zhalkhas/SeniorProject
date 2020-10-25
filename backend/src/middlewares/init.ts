import express, { Express } from 'express';
import morgan from 'morgan';
import session from 'express-session';
import passport from 'passport';

import authMiddleware from './passport-middleware';

export default (app: Express) => {
    app.use(express.json());
    app.use(morgan('combined'));
    app.use(session({secret: 's3cr3t'}));
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(authMiddleware);
};
