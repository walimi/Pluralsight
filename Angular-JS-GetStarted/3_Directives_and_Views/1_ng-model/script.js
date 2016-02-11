(function(){
    
    var app = angular.module("githubViewer", []); 
    
    var MainController = function($scope, $http) {

        var onUserComplete = function(response) {
            $scope.user = response.data;
            $scope.error = "";    
        };

        var onError = function (reason) {}
            $scope.error = "Could not fetch the user.";
        ;

        $http.get("https://api.github.com/users/angular")
             .then(onUserComplete, onError);

        $scope.username = "angular"; 
        $scope.message = "Github Viewer"; 
    };
    
    app.controller("MainController", ["$scope", "$http", MainController]); 
    
}());