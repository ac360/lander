// Module Depndencies
var express     = require('express'),
    fs          = require('fs'),
    mongoose    = require('mongoose'),
    logger      = require('mean-logger'),
    MongoStore  = require('connect-mongo')(express),
    flash       = require('connect-flash'),
    helpers     = require('view-helpers'),
    env         = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config      = require('./config/config');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Bootstrap db connection
var db = mongoose.connect(config.db, function(e) {
        // If error connecting
        if(e) throw e;
        //Bootstrap models
        var models_path = __dirname + '/app/models';
        var walk = function(path) {
            fs.readdirSync(path).forEach(function(file) {
                var newPath = path + '/' + file;
                var stat = fs.statSync(newPath);
                if (stat.isFile()) {
                    if (/(.*)\.(js|coffee)/.test(file)) {
                        require(newPath);
                    }
                } else if (stat.isDirectory()) {
                    walk(newPath);
                }
            });
        };
        walk(models_path);

        var app = express();
        // -- Express Settings
            app.set('showStackError', true);
            //Should be placed before express.static
            app.use(express.compress({
                filter: function(req, res) {
                    return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
                },
                level: 9
            }));
            //Setting the fav icon and static folder - tejkh
            app.use(express.favicon());
            app.use(express.static(config.root + '/public'));
            //Don't use logger for test env
            if (process.env.NODE_ENV !== 'test') {
                app.use(express.logger('dev'));
            }
            //Set views path, template engine and default layout
            app.set('views', config.root + '/app/views');
            app.set('view engine', 'jade');
            //Enable jsonp
            app.enable("jsonp callback");
            // app.configure
            app.configure(function() {
                //cookieParser should be above session
                app.use(express.cookieParser());
                //bodyParser should be above methodOverride
                app.use(express.bodyParser());
                app.use(express.methodOverride());
                //express/mongo session storage
                app.use(express.session({
                    secret: 'SVTAPP',
                    cookie : {
                        maxAge: 3600000 // see below
                    },
                    store:  new MongoStore({ url: config.db, auto_reconnect: true })
                }));
                //connect flash for flash messages
                app.use(flash());
                //dynamic helpers
                app.use(helpers(config.app.name));
                //routes should be at the last
                app.use(app.router);
                // Error Handler
                app.use(function(err, req, res, next) {
                     //Log it
                    console.error(err.stack);
                    //Treat as 404
                    if ( ~err.message.indexOf('Not Found') ) {
                        res.status(404).jsonp({ error: err.message } );
                    } else {
                        res.status(400).jsonp({ error: err.message } );
                    }
                });
            }); // app.configure

            //Bootstrap routes
            require('./config/routes')(app);
            // Start App
            app.listen(config.port);
            console.log('Express app started on port ' + config.port);
            //Initializing logger
            // logger.init(app, mongoose);
            //expose app
            exports = module.exports = app;
});
        