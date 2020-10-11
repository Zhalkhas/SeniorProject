import express, {NextFunction, Request, Response} from 'express';

import "./middlewares/passport-middleware";

import passport from 'passport';
import session from "express-session";

const app = express();

app.use(express.json());
app.use(session({secret: 's3cr3t'}));
app.use(passport.initialize());
app.use(passport.session());

// Simple route middleware to ensure user is authenticated.
// Use this route middleware on any resource that needs to be protected.  If
// the request is authenticated (typically via a persistent login session),
// the request will proceed.  Otherwise, the user will be redirected to the
// login page.

let authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        return next();
    }
    if (req.user) {
        console.log(req.user);
    } else {
        console.log('user not found');
    }
    res.sendStatus(401);
}

app.get('/',
    authMiddleware,
    (req, res) => {
        res.json({"res": "hi"});
    })

app.get('/login',
    passport.authenticate('local', {
        session: true,
    },), ((req, res) => {
        res.sendStatus(200);
    })
);

export default app;
