/**
* Quota.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema:true,
  attributes: {
    lastDayOfPayment:{
      type:'date',
      required: true
    },
    paid:{
      type:'boolean',
      required:true,
      defaultsTo:false
    },
    dateOfPayment:{
      type:'date',
      required:false,
      defaultsTo:null
    },
    owner:{
      model:'member'
    },
    paidAmount:{
      type: 'integer',
      required:false,
      defaultsTo:0
    }
  },
  findAllByMember:function(opts, cb){
    var memberId = opts.member;
    if(typeof memberId == 'object'){
      memberId = member.id;
    }
    Member.findOne().where({id:memberId}).exec(function(err,member){
      if(err) return cb(err);
      if(!member){
        err = new Error();
        err.message = require('util').format('Cannot find quotas because member doesnt exist');
        err.status = 404;
        return cb(err);
      }
      Quota.find().populate('owner').where({owner:member.id}).exec(function(err, quotas){
        if(err) return cb(err);
        cb(err,quotas);
      });
    });
  },
  findOwedByMember:function(opts, cb){
    var memberId = opts.member;
    if(typeof memberId == 'object'){
      memberId = member.id;
    }
    Member.findOne().where({id:memberId}).exec(function(err,member){
      if(err) return cb(err);
      if(!member){
        err = new Error();
        err.message = require('util').format('Cannot find quotas because member doesnt exist');
        err.status = 404;
        return cb(err);
      }
      Quota.find().populate('owner').where({owner:member.id, paid:false}).exec(function(err, quotas){
        if(err) return cb(err);
        cb(err,quotas);
      });
    });

  }
};

