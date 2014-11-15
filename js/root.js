var app = angular.module('root', [])
    .controller("index", ["$scope", function ($scope) {
        $scope.message = "Hello World!";
        
      
    }]);
    
    
app.config(function($sceDelegateProvider) {
 $sceDelegateProvider.resourceUrlWhitelist([
   // Allow same origin resource loads.
   'self',
   // Allow loading from our assets domain.  Notice the difference between * and **.
   'http://fast.wistia.net/embed/**',
   'http://*.vimeo.com/**'
   ]);
 })
    
app.controller("PostsCtrl", function($scope, $http) {
  $http.get('http://www.nocanvas.com/udayav2/wp-json/posts?type=x-portfolio').
    success(function(data, status, headers, config) {
      $scope.posts = data;
      
    }).
    error(function(data, status, headers, config) {
      // log error
      console.log(data);
    });
});


