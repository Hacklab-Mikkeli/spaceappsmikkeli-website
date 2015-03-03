var fragmentDAO = require('../../DAO/fragmentDAO');

exports.get = function (req, res) {
  var identifier = req.param('id');
  fragmentDAO.findByIdentifier(identifier, function (fragment) { 
    res.send(fragment);
  });
};

exports.update = function (req, res) {
  var identifier = req.body.identifier;
  var html = req.body.html;
  fragmentDAO.createOrUpdate(identifier, html, function (fragment) { 
    res.send(fragment);
  });
};