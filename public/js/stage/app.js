window.app = angular.module('mean', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.router', 'mean.system', 'LocalStorageModule']);

angular.module('mean.system', []);

// Servant Global Functions
app.run(function($rootScope, $state, $stateParams, $timeout, $interval, $window) {
	
	// Initialize ---------------------------

	// Defaults -----------------------------

	// Universal Functions ------------------

		var setLoading = function() {
			if ($rootScope.s.d.animation_logo_loading === false) {
				$rootScope.s.d.animation_logo_loading = true;
				$('#logo-text').animate({
		        	'opacity'  : "0"
		        }, 150, function() {
		        	$('#logo-text').hide();
		        	$('#logo-status').show();
		        	$('#logo-status').animate({
			        	'opacity'  : "1"
			        });
		        });
		    };
		};
		var unsetLoading = function() {
			$('#logo-status').animate({
	        	'opacity'  : "0"
	        }, 150, function() {
	        	$('#logo-status').hide();
	        	$('#logo-text').show();
	        	$('#logo-text').animate({
		        	'opacity'  : "1"
		        }, 150, function() {
		        	$rootScope.s.d.animation_logo_loading = false;
		        });
	        });
		};

}); // app.run
