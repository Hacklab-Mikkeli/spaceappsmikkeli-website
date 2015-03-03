var User = require('../model/user')

exports.create = function (email, callback) {
  var user = new User();
  user.email = email;
  user.save(function (err, user) {
    if (err) throw err;
    callback(user);
  });
};

exports.list = function (callback) {
  User.find({}, function (err, users) {
    if (err) throw err;
    callback(users);
  });
};