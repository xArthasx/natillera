/**
 * Activity.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  schema:true,
  attributes: {
    name:{
      type:'string',
      required:true
    },
    lastDayOfPayment:{
      type:'date',
      required:true
    },
    members:{
      collection:'member'
    },
    paid:{
      type:'boolean',
      required:true,
      defaultsTo:false
    }
  },
  afterUpdate:function(updated, cb){
    if(!updated.paid){
      Activity.findOne({id:updated.id}).populate('members').exec(function(err, activity){
        Member.find().exec(function(err, members){
          if(activity.members.length==members.length){
            activity.paid = true;
            activity.save();
          }
        });
      });
    }
    cb();
  }
};

