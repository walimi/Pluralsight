'use strict'; 

eventsApp.controller('EventController', 
	function EventController($scope, eventData) {
		$scope.sortOrder = 'name';
		eventData.getEvent(function(event) {
			$scope.event = event;
		});
		
		$scope.upVoteSession = function (session) {
			session.upVoteCount++;
		};
		
		$scope.downVoteSession = function (session) {
			if(session.upVoteCount >= 1)
				session.upVoteCount--; 
		};
	}	
);