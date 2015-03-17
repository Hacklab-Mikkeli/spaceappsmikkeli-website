var fragmentDAO = require('../../DAO/fragmentDAO');

exports.get = function (req, res) {
  var identifier = req.param('id');
  fragmentDAO.findByIdentifierOrderByRevision(identifier, function (fragment) { 
    res.send(fragment);
  });
};

exports.update = function (req, res) {
  var identifier = req.body.identifier;
  var html = req.body.html;
  fragmentDAO.create(identifier, html, function (fragment) { 
    res.send(fragment);
  });
};