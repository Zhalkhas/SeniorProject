var passport = require('passport');
var passportLocal = require('passport-local');
var LocalStrategy = passportLocal.Strategy;
(function () {
    console.log("Init passportjs");
    passport.serializeUser(function (user: any, done: any) {
        console.log("serialize ", user);
        done(null, user.id);
    });

    passport.deserializeUser(function (id: any, done: any) {
        console.log("deserialize ", id);
        done(null, { id: id, username: "admin", password: "admin" });
    });

    passport.use(new LocalStrategy({ passReqToCallback: true },
        (username: any, password: any, done: any) => {
            console.log("Authenticating ", username, password);
            if (username == "admin" && password == "admin") {
                return done(null, { username: username, password: password });
            } else {
                return done(null, false, { message: "Invalid credentials" });
            }
        }
    ));
    console.log("Init finished");
})();

