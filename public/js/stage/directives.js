// Set Element Height According to Viewport
// app.directive('resize', function ($window) {
//     return function (scope, element) {
//         var w = angular.element($window);
//         scope.$watch(function () {
//             return { 'h': w.height(), 'w': w.width() };
//         }, function (newValue, oldValue) {
//             scope.windowHeight = newValue.h;
//             scope.windowWidth = newValue.w;
            
//             scope.style = function () {
//                 return { 
//                     'height': (newValue.h - 400) + 'px'
//                 };
//             };
            
//         }, true);
    
//         w.bind('resize', function () {
//             scope.$apply();
//         });
//     }
// })