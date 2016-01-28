/**
 * QuotaController
 *
 * @description :: Server-side logic for managing quotas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	retrieveAllByMember:function(req,res){
    var idMember = req.param('member');
    Quota.findAllByMember({member:idMember}, function(err,quotas){
      if(err) return res.negotiate(err);
      res.json(quotas);
    });
  },
  pay:function(req, res){
    Quota
      .update({id:req.param('id')},{paid:true,dateOfPayment: new Date(req.param('dateOfPayment'))})
      .exec(function(err,quota){
        if(err) return res.negotiate(err);
        res.json({success:true});
      });
  }
};

