/**
 * LoanController
 *
 * @description :: Server-side logic for managing loans
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	populateCreate:function(req, res){
    Member.find().exec(function(err, members){
        res.view('loan/create',{
            members : members
        })
    });
  }
};

