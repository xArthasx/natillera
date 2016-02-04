/**
 * DataController
 *
 * @description :: Server-side logic for managing data
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	data: function(req, res){
    Quota.find().populate('owner').exec(function(err, quotas){
      if(err)return res.negotiate(err);
      var members = {};
      quotas.forEach(function(quota){
        console.log(quota);
        var member = members[quota.owner.id];
        members[quota.owner.id]  = member || (quota.owner);
        member = members[quota.owner.id];
        if(!member.quotas){
          member.quotas = [];
        }
        member.quotas.push(quota);
      })
      res.view('data/tables',{
        quotas:quotas,
        members: members
      })
    });
  }
};

