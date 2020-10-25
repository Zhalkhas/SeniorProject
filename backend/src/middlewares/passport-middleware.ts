import passport from 'passport';
import passportLocal from 'passport-local';
import {NextFunction, Request, Response} from 'express';

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
        (username: string, password: string, done: any) => {
            console.log("Authenticating ", username, password);
            if (username === "admin" && password === "admin") {
                return done(null, {username: username, password: password});
            } else {
                return done(null, false, {message: "Invalid credentials"});
            }
        }
    ));
    console.log("Init finished");
})();

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
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

export default authMiddleware;
