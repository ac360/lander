//Setting up route
window.app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");
    // Now set up the states
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "../../views/sdpt/wetmonkey/home.html"
      })
      .state('pictures', {
        url: "/pictures",
        templateUrl: "../../views/sdpt/wetmonkey/pictures.html"
      })
      .state('deal', {
        url: "/deal",
        templateUrl: "../../views/sdpt/wetmonkey/deal.html"
      })
      .state('about', {
        url: "/about",
        templateUrl: "../../views/sdpt/wetmonkey/about.html"
      })
      .state('location', {
        url: "/location",
        templateUrl: "../../views/sdpt/wetmonkey/location.html"
      })
      .state('offroad', {
        url: "/offroad",
        templateUrl: "../../views/sdpt/wetmonkey/offroad.html"
      })
      .state('faq', {
        url: "/faq",
        templateUrl: "../../views/sdpt/wetmonkey/faq.html"
      })
});

// Setting HTML5 Location Mode
window.app.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);