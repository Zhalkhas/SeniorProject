import passport from 'passport';
import passportLocal from 'passport-local';
import {NextFunction, Request, Response} from 'express';
import User from '../models/User.model';

const LocalStrategy = passportLocal.Strategy;

(function () {
    console.log("Init passportjs");
    passport.serializeUser(function (user: any, done: any) {
        console.log("serialize ", user);
        done(null, user);
    });

    passport.deserializeUser(function (obj: any, done: any) {
        console.log("deserialize ", obj);
        done(null, obj);
    });

    passport.use(new LocalStrategy({
            session: true,
            usernameField: "username",
            passwordField: "password"
        },
        async (username: string, password: string, done: any) => {
            console.log("Authenticating ", username, password);
            let user = await User.findOne({where: {login: username}});
            if (user && user.getDataValue('password') === password) {
                return done(null, {username: username, password: password});
            } else {
                console.log("user not found");
                return done(null, false, {message: "Invalid credentials"});
            }

        }
    ));
    console.log("Init finished");
})();

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    //TODO: fix regex
    console.log("base URL ", req.url.search('^/api/auth/login'));
    if (req.isAuthenticated() || req.url.search('^/api/auth/login') === 0) {
        console.log("next");
        return next();
    }
    if (req.user) {
        console.log(req.user);
    } else {
        console.log('user not found');
    }
    res.sendStatus(401);
}

export default authMiddleware;
