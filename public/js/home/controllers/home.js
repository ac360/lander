angular.module('mean.system').controller('HomeController', ['$scope', '$timeout', '$modal', 'localStorageService', function ($scope, $timeout, $modal, localStorageService) {
    
    $scope.initializeHome = function() {
        // Defaults
        console.log("hello");
    };

    // Initialize
    $scope.initializeHome();

}]);