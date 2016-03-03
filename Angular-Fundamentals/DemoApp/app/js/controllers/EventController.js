'use strict'; 

eventsApp.controller('EventController', 
	function EventController($scope, eventData, $routeParams, $route) {
		$scope.sortOrder = 'name';
		$scope.event = $route.current.locals.event;


		$scope.upVoteSession = function (session) {
			session.upVoteCount++;
		};
		
		$scope.downVoteSession = function (session) {
			if(session.upVoteCount >= 1)
				session.upVoteCount--; 
		};

	}
);