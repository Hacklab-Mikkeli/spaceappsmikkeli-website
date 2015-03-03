exports.index = function (req, res) {
  res.render('index', {user: req.user});
};

exports.challenges = function (req, res) {
  res.render('challenges', { user: req.user });
};

exports.venue = function (req, res) {
  res.render('venue', { user: req.user }); 
};

exports.users = function (req, res) {
  res.render('management', {user: req.user});
};