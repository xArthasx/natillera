/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  login:function(req,res){
    return res.login({
      email: req.param('email'),
      password: req.param('password'),
      successRedirect: '/',
      invalidRedirect: '/login'
    });
  },
  logout:function(req,res){
    req.session.me = null;

    if (req.wantsJSON) {
      return res.ok('Logged out successfully!');
    }

    // Otherwise if this is an HTML-wanting
    //browser, do a redirect.
    return res.redirect('/');
  }
};

