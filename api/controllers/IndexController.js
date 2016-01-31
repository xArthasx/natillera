/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {
    Member.find().exec(function(err, members){
      return res.view('index',{
        members: members
      });
    });
  }
};

