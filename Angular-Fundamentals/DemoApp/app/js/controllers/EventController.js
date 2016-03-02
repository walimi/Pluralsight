'use strict'; 

eventsApp.controller('EventController', 
	function EventController($scope, eventData, $routeParams, $route) {
		$scope.sortOrder = 'name';
		$scope.event = eventData.getEvent($routeParams.eventId);
		console.log($route.current.params.foo);



		$scope.upVoteSession = function (session) {
			session.upVoteCount++;
		};
		
		$scope.downVoteSession = function (session) {
			if(session.upVoteCount >= 1)
				session.upVoteCount--; 
		};

	}
);