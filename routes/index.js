var common = require('./components/common');
var fragment = require('./components/fragment');
var user = require('./components/user');

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();

  res.status(403).send('Go away!');
}

module.exports = function (app, passport) {
  
  /** Navigation Routes **/

  app.get('/', common.index);
  app.get('/program', common.program);
  app.get('/challenges', common.challenges);
  app.get('/venue', common.venue);
   app.get('/spaceguide', common.spaceguide);
  app.get('/users', isLoggedIn, common.users);

  /** Fragments **/

  app.get('/fragment/:id', fragment.get);
  app.post('/fragment', isLoggedIn, fragment.update);

  /** Auth **/

  app.get('/login/', passport.authenticate('google', { scope : ['profile', 'email'] }));
  app.get('/login/callback', passport.authenticate('google', {
    successRedirect : '/',
    failureRedirect : '/'
  }));

  /** User **/

  app.post('/user/new', isLoggedIn, user.add);
  app.get('/user/list', isLoggedIn, user.list);
  app.get('/logout', user.logout);

};
