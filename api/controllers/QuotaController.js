/**
 * QuotaController
 *
 * @description :: Server-side logic for managing quotas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	retrieveAllByMember:function(req,res){
    var idMember = req.param('member');
    Quota.find().where({owner:idMember}).populate('owner').exec(
      function(err, quotas){
        if(err){
          return res.negotiate(err);
        }
        res.json(quotas);
      }
    );
  },
  pay:function(req, res){
    Quota.update().where({id:req.param('id')},{paid:true,dateOfPayment: new Date(req.param('dateOfPayment'))}).exec(function(err,quota){
      res.json(arguments);
      if(err) return res.negotiate(err);
      req.json({success:true});
    })
  }
};

