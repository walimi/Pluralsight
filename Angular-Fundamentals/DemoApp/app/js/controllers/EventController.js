'use strict'; 

eventsApp.controller('EventController', 
	function EventController($scope, eventData, $routeParams) {
		$scope.sortOrder = 'name';
		$scope.event = eventData.getEvent($routeParams.eventId)
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

	}
);