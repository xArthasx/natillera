/**
* Payment.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema:true,
  attributes: {
    amount:{
      type:'integer',
      required:true
    },
    tax:{
      type:'integer',
      required:true,
      defaultsTo:0
    },
    loan:{
      model:'loan',
      required:true
    }
  }
};

