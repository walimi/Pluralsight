'use strict'; 

eventsApp.controller('EventController', 
	function EventController($scope, eventData) {
		
		//$scope.snippet = '<span style="color:red">hi there!</span>';
		//$scope.mystyle = {color: 'red'};
		//$scope.myclass = "blue";
		//$scope.buttonDisabled = true;

		$scope.sortOrder = 'name';

		$scope.event = eventData.event;
		
		$scope.upVoteSession = function (session) {
			session.upVoteCount++;
		};
		
		$scope.downVoteSession = function (session) {
			if(session.upVoteCount >= 1)
				session.upVoteCount--; 
		};
	}	
);