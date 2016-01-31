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
    Quota.findOne().where({id:req.param('quota')}).populate('owner').exec(function(err, quota){
      if(err) return res.negotiate(err);
      if(!quota){
        return res.badRequest('Invalid quota');
      }
      console.log(quota);
      var fine = req.param('fine');
      Quota.update({id:req.param('quota')},{paid:true,dateOfPayment: new Date(), fine:fine})
        .exec(function(err,quota){
          if(err) return res.negotiate(err);
          res.json({success:true});
        });
    });

  },
  retrieveOwedByMember:function(req,res){
    var idMember = req.param('member');
    Quota.findOwedByMember({member:idMember}, function(err, quotas){
      if(err) return res.negotiate(err);
      res.view('quotas/owedByMember', {quotas:quotas});
    });
  }
};
