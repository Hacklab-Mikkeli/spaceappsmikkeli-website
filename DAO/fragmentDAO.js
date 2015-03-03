var Fragment = require('../model/fragment');

exports.findByIdentifier = function (identifier, callback) {
  Fragment.findOne({
    identifier : identifier
  }, function (err, fragment) {
       if (err) throw err;
       callback(fragment); 
  });
};

exports.createOrUpdate = function (identifier, html, callback) {
  Fragment.update({
    identifier: identifier
  }, {
    identifier: identifier,
    html : html
  }, {
    upsert: true
  }, function (err, fragment) {
    if (err) throw err;
    callback(fragment); 
  });
};

