/**
* Member.js
*
* @description :: Representa los integrantes de la natillera.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema:true,
  attributes: {
    id:{
      type:'integer',
      autincrement:true,
      primaryKey:true
    },
    name:{
      type:'string',
      required:'true',
    },
    quotaAmount:{
      type:'integer',
      required:'true',
      min:10000,
      max:100000
    }
  },
  afterCreate:function(newlyInsertedRecord,cb){
    for(var i = 0; i < 11; i++){
      var date = new Date(2016, i+1, 0);
      var quota = Quota.create(
        {
          lastDayOfPayment:date,
          owner:newlyInsertedRecord
        }
      ).exec(function(err,quota){
        if(err) return err;
        quota.save();
      });
    }
    cb();
  }
};

