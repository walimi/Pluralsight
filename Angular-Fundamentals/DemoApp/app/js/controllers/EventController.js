'use strict'; 

eventsApp.controller('EventController', 
	function EventController($scope, eventDataService, $log) {
		$scope.sortOrder = 'name';
		$scope.event = eventDataService.getEvent();
		
		$scope.upVoteSession = function (session) {
			session.upVoteCount++;
		};
		
		$scope.downVoteSession = function (session) {
			if(session.upVoteCount >= 1)
				session.upVoteCount--; 
		};
	}	
);