'use strict'; 

eventsApp.controller('EventController', 
	function EventController($scope, eventData, $routeParams, $route) {
		$scope.sortOrder = 'name';
		$scope.event = eventData.getEvent($routeParams.eventId);


		$scope.upVoteSession = function (session) {
			session.upVoteCount++;
		};
		
		$scope.downVoteSession = function (session) {
			if(session.upVoteCount >= 1)
				session.upVoteCount--; 
		};

	}
);