/**
 * PaymentController
 *
 * @description :: Server-side logic for managing payments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  populatePayment:function(req, res){
    Loan.findOne().where({id:req.param('loan')}).populate('payments').exec(function(err, loan){
      res.view('payment/create',{
        loan:loan
      });
    });
  }
};

