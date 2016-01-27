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
    }
  }
};

