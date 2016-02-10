var MainController = function($scope) {

        var person = {
            firstName: "Wahid",
            lastName: "Alimi",
            imageSrc: "https://pbs.twimg.com/profile_banners/21834725/1408550581/1500x500"
        };

        $scope.message = "Hello, Angular!"; 
        $scope.person = person;
    };
    