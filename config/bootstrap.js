/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {
  sails.on('lifted', function(){
    var fs = require('fs');
      fs.writeFileSync("/tmp/sailsStatus", "It's Sailing");
      fs.unlinkSync("/tmp/sailsSunk");
    });
  sails.on('lower', function(){
    var fs = require('fs');
    fs.unlinkSync('/tmp/sailsStatus');
    fs.writeFileSync("/tmp/sailsSunk", "It sank");
  });
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
