import passport from 'passport';
import passportLocal from 'passport-local';
import {NextFunction, Request, Response} from 'express';
import UserService from '../services/user-service';

const LocalStrategy = passportLocal.Strategy;

(function () {
    console.log("Init passportjs");
    passport.serializeUser(function (user: any, done: any) {
        done(null, user);
    });

    passport.deserializeUser(function (obj: any, done: any) {
        done(null, obj);
    });

    passport.use(new LocalStrategy({
            session: true,
            usernameField: "username",
            passwordField: "password"
        },
        async (username: string, password: string, done: any) => {
            console.log("Authenticating ", username, password);
            if (await UserService.checkPassword(username, password)) {
                return done(null, {username: username, password: password});
            } else {
                console.log("User not found in db");
                return done(null, false, {message: "Invalid credentials"});
            }

        }
    ));
    console.log("Init finished");
})();

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    //TODO: fix regex
    if (req.isAuthenticated() || req.url.search('^/api/auth/login') === 0) {
        return next();
    }
    if (req.user) {
        console.log(req.user, " logged in");
    } else {
        console.log('User isn\'t authenticated');
    }
    res.sendStatus(401);
}

export default authMiddleware;
