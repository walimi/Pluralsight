'use strict'; 

eventsApp.controller('EventController', 
	function EventController($scope, eventDataService, $anchorScroll) {
		$scope.sortOrder = 'name';
		$scope.event = eventDataService.getEvent()
			.$promise
			.then(function(event) { $scope.event = event; console.log(event); })
			.catch(function(response) { console.log(response); }); // catch is for handling errors
		
		$scope.upVoteSession = function (session) {
			session.upVoteCount++;
		};
		
		$scope.downVoteSession = function (session) {
			if(session.upVoteCount >= 1)
				session.upVoteCount--; 
		};

		$scope.scrollToSession = function() {
			$anchorScroll();
		};
	}	
);