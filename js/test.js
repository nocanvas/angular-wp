function Ctrl($scope, $sce, $http){
  var url1 = $sce.trustAsResourceUrl('http://fast.wistia.net/embed/iframe/7no4eaudw0');
  var url2 = $sce.trustAsResourceUrl('http://w3schools.com/images/compatible_chrome.gif');

  $scope.urls = [url1,url2];
  $scope.url = $scope.urls[0];
  $scope.toggle = function(){
    if($scope.url == $scope.urls[0]){
      $scope.url = $scope.urls[1];
    } else {
      $scope.url = $scope.urls[0];
    }
  };
  
  
  var cleanurl = function($scope, $sce){
	  
	  return 'http://fast.wistia.net/embed/iframe/7no4eaudw0';
	  
  }
  
   $http.get('http://www.nocanvas.com/udayav2/wp-json/posts?type=x-portfolio').
    success(function(data, status, headers, config) {
      $scope.posts = data;
    }).
    error(function(data, status, headers, config) {
      // log error
      console.log(data);
    });
    
    
}

