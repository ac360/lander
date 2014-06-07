'use strict';

// Module dependencies.

var Servant    = require('servant-sdk').Servant;
var production = true;

if (production === true) {
	var servant = new Servant('xN6qoGnIlVCr8Kcu', 'aZSRGa1K2gdgyBeQSeSlREstghoH4zgN', 'http://localhost:3000/auth/servant/callback');
} else {
	var servant = new Servant('yK5gPAvMABOUq27W', 'FFcPMuJqKRy6ZQSnOBjzsu99NFBojdcC', 'http://localhost:3000/auth/servant/callback');
};

var smartdept = function(req, res, next) {
	var hostname = req.headers.host.split(":")[0];

	console.log(hostname);

	if (hostname.indexOf('smart') > 0) {
	 	res.redirect('/sdpt/wetmonkey/#!/');
	} else {
	    next(); 
	};
};

var wetmonkey = function(req, res, next) {
	res.render('smartdept/wetmonkey');
};

var home = function(req, res) {
	res.render('home');
};

var stage = function(req, res, token) {
	res.render('stage');
};

var callback = function(req, res) {
	servant.getAccessToken(req, function(error, token) {
		res.redirect('/s/#!/?token=' + token.token.access_token);
	});
};

module.exports = {
    smartdept:          smartdept,
    wetmonkey:          wetmonkey,
    home:           	home,
    stage:      		stage,
    callback:       	callback
}