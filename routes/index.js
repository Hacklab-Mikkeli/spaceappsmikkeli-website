var common = require('./components/common');
var fragment = require('./components/fragment');
var user = require('./components/user');

module.exports = function (app, passport) {
  
  /** Navigation Routes **/

  app.get('/', common.index);
  app.get('/challenges', common.challenges);
  app.get('/venue', common.venue);
  app.get('/users', common.users);

  /** Fragments **/

  app.get('/fragment/:id', fragment.get);
  app.post('/fragment', fragment.update);

  /** Auth **/

  app.get('/login/', passport.authenticate('google', { scope : ['profile', 'email'] }));
  app.get('/login/callback', passport.authenticate('google', {
    successRedirect : '/',
    failureRedirect : '/'
  }));

  /** User **/

  app.post('/user/new', user.add);
  app.get('/user/list', user.list);

};
