exports.index = function (req, res) {
  res.render('index');
};

exports.challenges = function (req, res) {
  res.render('challenges');
};

exports.venue = function (req, res) {
  res.render('venue'); 
};

exports.users = function (req, res) {
  res.render('management');
};