/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {
    Member.find().exec(function(err, members){
      Loan.find().populate('responsible').exec(function(err, loans){
        Activity.find().exec(function(err, activities){
          return res.view('index',{
            members: members,
            loans: loans,
            activities: activities
          });
        })
      })
    });
  }
};

