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
        
        var getRepoDetails = function (username, reponame) {
            var repo;
            var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame; 
            
            return $http.get(repoUrl)
                        .then(function(response){
                            repo = response.data;
                            return repo;
                            //return $http.get(repoUrl + "/collaborators");
                        });/*
                        .then(function(response){
                            repo.collaborators = response.data;
                            return repo;
                        });*/      
        
        };
        
        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoDetails: getRepoDetails
        };
    };
    
    
    // following line of code gets a reference to the githubViewer module.
    var module = angular.module("githubViewer");
    
    // register the service with angular (this is just one of the ways)
    module.factory("github", github);
}());