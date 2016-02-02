/**
* Loan.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema:true,
  attributes: {
    amount:{
      type:'integer',
      required: true
    },
    responsible:{
      model:'member',
      required: true
    },
    rate:{
      type: 'integer',
      enum: [5,10]
    },
    payments:{
      collection:'payment',
      via: 'loan'
    },
    paid:{
      type:'boolean',
      required:true,
      defaultsTo:false
    }
  }
};

