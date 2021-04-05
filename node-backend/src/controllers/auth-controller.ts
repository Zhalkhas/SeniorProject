import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/login',
    passport.authenticate('local', {
        session: true,
    },), ((req, res) => {
        res.sendStatus(200);
    })
);

export default router;
