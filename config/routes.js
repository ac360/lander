var async      = require('async');

module.exports = function(app, passport, auth) {
    // Application Routes
    var application = require('../app/controllers/application');


    app.get('/sdpt',                                 application.smartdept); // Handle Old SmartDepartment Sites
    app.get('/sdpt/wetmonkey',                       application.wetmonkey); // Handle Old SmartDepartment Sites
    app.get('/auth/servant/callback',                application.callback);
    app.get('/s',                                    application.stage);
    app.get('/',                                     application.home);
};