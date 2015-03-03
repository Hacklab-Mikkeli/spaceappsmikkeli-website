var userDAO = require('../../DAO/userDAO');

exports.add = function (req, res) {
  var email = req.body.email;
  userDAO.create(email, function (user) { 
    res.send(user);
  });
};

exports.list = function (req, res) {
  userDAO.list(function (users) { 
    res.send(users);
  });
}