var Fragment = require('../model/fragment');

exports.findByIdentifierOrderByRevision = function (identifier, callback) {
  Fragment.find({identifier : identifier}).sort({ revision : 'desc'}).exec(function(err, fragments){
    callback(fragments[0]);
  });
};

exports.create = function (identifier, html, callback) {
  var fragment = new Fragment();
  fragment.html = html;
  fragment.identifier = identifier;
  fragment.revision = new Date().getTime();
  fragment.save(function(err, fragment){
    if(err) throw err;
    callback(fragment);
  });
};

