/**
 * ActivityController
 *
 * @description :: Server-side logic for managing activities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  populatePayment:function(req, res){
    Activity.findOne().populate('members').where({id:req.param('activity')})
      .exec(function(err, activity){
        var notInMembers = [];
        for(var i = 0; i < activity.members.length; i++){
          notInMembers.push(activity.members[i].id);
        }
        Member.find({id:{'!':notInMembers}}).exec(function(err, members){
          res.view('activity/pay',{
            activity:activity,
            members:members
          });
        })
      })
  },
  pay:function(req, res){
    Member.findOne({id:req.param('member')}).exec(function(err, member){
      if(err) return res.negotiate(err);
      if(!member) return res.notFound();
      Activity.findOne({id:req.param('activity')}).populate('members').exec(function(err, activity){
        activity.members.add(member);
        activity.save(console.log);
        res.json({success:true});
      });
    })
  }
};

