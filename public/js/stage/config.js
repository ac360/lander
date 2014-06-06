//Setting up route
window.app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");
    // Now set up the states
    $stateProvider
      .state('stage', {
        url: "/",
        templateUrl: "../views/content/stage.html"
      })
});

// Setting HTML5 Location Mode
window.app.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);