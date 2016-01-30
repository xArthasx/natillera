/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema: true,
  attributes: {
    email:{
      type:'email',
      required:true,
      unique:true
    },
    password:{
      type:'string',
      required:true,
      minLength: 8
    },
    name:{
      type:'string',
      required:true
    },
    type:{
      type:'string',
      required:true
    }
  },
  attemptLogin: function(inputs, cb){
    User.findOne({
      email: inputs.email,
      password: inputs.password
    }).exec(cb);
  }
};

