const passport = require('passport');
const GoogleStratedy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');
// console.log(User);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => {
        done(null, user);
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