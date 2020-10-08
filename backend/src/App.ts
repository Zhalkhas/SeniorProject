import express from 'express';
require("./middlewares/passport-middleware");
var flash = require('connect-flash'); //required by passportjs
var passport = require('passport');
var session = require('express-session');
var morgan = require('morgan')

const app = express();

app.use(flash());
app.use(morgan('combined'));
app.use(passport.initialize());
app.use(passport.session());
app.get('/',
    // passport.authenticate('local', { session: true, },),
    (req, res, err) => {
        res.json({ "res": "hi" });
    })
app.post('/login',
    passport.authenticate('local', {
        session: true,
    })
);

export default app;
