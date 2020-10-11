import passport from 'passport';
import passportLocal from 'passport-local';

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
        (username: any, password: any, done: any) => {
            console.log("Authenticating ", username, password);
            if (username == "admin" && password == "admin") {
                return done(null, {username: username, password: password});
            } else {
                return done(null, false, {message: "Invalid credentials"});
            }
        }
    ));
    console.log("Init finished");
})();
