// Modals Open Functionality - Here it is not bound and restricted by being in a Controller
angular.module('mean.system').factory('Modals', ['$http', '$rootScope', '$modal',
  function($http, $rootScope, $modal) {
    
    return {
        error: function(message) {
          console.log(message)
            $modal.open({
              windowClass: 'error-modal',
              templateUrl: 'views/modals/error_modal.html',
              controller:  function ($scope, $modalInstance) {
                    $scope.message = message;
                    $scope.close = function() {
                      $modalInstance.close();
                    };
              }
            });
        },
        success: function(message) {
          console.log(message)
            $modal.open({
              windowClass: 'success-modal',
              templateUrl: 'views/modals/success_modal.html',
              controller:  function ($scope, $modalInstance) {
                    $scope.message = message;
                    $scope.close = function() {
                        $modalInstance.close();
                        $rootScope.$broadcast('SuccessModalClosed');
                    };
              }
            });
        }
    }; // return
  }
]);





