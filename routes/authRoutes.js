const passport = require('passport');

module.exports = (app) => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send('you are signing out ' + req.user);
        
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
        console.log('current user: ' + req.user);
        //console.log(res);
        //console.log(req);
    });
};