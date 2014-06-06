angular.module('mean.system').controller('StageController', ['$rootScope', '$scope', '$location', '$stateParams', 'Modals', function ($rootScope, $scope, $location, $stateParams, Modals) {

    $scope.initializeStage = function() {
        // Check Params For Token
        var queryParams = $location.search()
        if (queryParams.token) {
            $scope.token = queryParams.token;
        } else {
            // Try To Load Token From Local Storage
        };
        
        $location.url($location.path());
    };

    // Initialize
    $scope.initializeStage();

}]);