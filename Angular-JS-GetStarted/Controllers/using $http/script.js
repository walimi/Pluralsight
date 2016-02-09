var MainController = function($scope, $http) {
    
    var onUserComplete = function(response) {
        $scope.user = response.data;
        
    };
        
    $http.get("https://api.github.com/users/walimi")
         .then(onUserComplete);
    
    $scope.message = "Hello, Angular!"; 
};
    