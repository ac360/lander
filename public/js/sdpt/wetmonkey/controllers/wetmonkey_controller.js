angular.module('mean.system').controller('WetmonkeyController', ['$rootScope', '$scope', '$location', '$stateParams', 'Modals', function ($rootScope, $scope, $location, $stateParams, Modals) {

	$scope.menu = false;

    $scope.initialize = function() {

    };

    // Initialize
    $scope.initialize();

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){ 
    	$scope.menu = false;
	});

}]);