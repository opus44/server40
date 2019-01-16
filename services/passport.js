const passport = require('passport');
const GoogleStratedy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');
// console.log(User);

passport.serializeUser((user, done) => {
    console.log('serializeUser');
    done(null, user.id);
    console.log('user' + user);
});

passport.deserializeUser((id, done) => {
    console.log('deserializeUser');
    User.findById(id).then(user => {
        done(null, user);
        console.log('user: ' + user);
    });
});

passport.use(
    new GoogleStratedy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done) => {
            User.findOne({googleID: profile.id})
                .then((existingUser) => {
                    if (existingUser) {
                        console.log('we found you ' + profile.id + ' ' + existingUser.id);
                        done(null, existingUser);
                    } else {
                        console.log('You are a new user ' + profile.id );
                        new User ({ googleID: profile.id, googleDisplayName: profile.displayName })
                        .save()
                        .then(user => done(null, user));
                    }
                });                
            console.log(' ');
            console.log(profile.displayName);
        }
    )
);