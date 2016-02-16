(function() {
    
    var github = function ($http) {
        
        var getUser = function(username) {
            return $http.get("https://api.github.com/users/" + username)
                        .then(function(response){
                            return response.data;
                        });
        }; 
        
        var getRepos = function (user){
            return $http.get(user.repos_url)
                        .then(function(response) {
                            return response.data;
                        });
            
        };
        
        return {
            getUser: getUser,
            getRepos: getRepos
            
        };
    };
    
    
    // following line of code gets a reference to the githubViewer module.
    var module = angular.module("githubViewer");
    
    // register the service with angular (this is just one of the ways)
    module.factory("github", github);
}());