'use strict'; 

eventsApp.controller('EventController', 
	function EventController($scope) {
		
		$scope.snippet = '<span style="color:red">hi there!</span>';
		//$scope.mystyle = {color: 'red'};
		//$scope.myclass = "blue";
		$scope.buttonDisabled = true;

		$scope.event = {
			name: 'Angular Boot Camp',
			date: '1/1/2013',
			time: '10:30am',
			location: {
				address: 'Google Headquarters',
				city: 'Mountain View',
				state: 'CA'
			},
			imageUrl: '/img/angularjs-logo.png',
			sessions: [
				{ 
					name: 'Directives Masterclass',
					creatorName: 'Bob Smith',
					duration: '1 hr',
					level: 'Advanced',
				 	abstract: 'In this session you will learn ins and outs of directives!',
					upVoteCount: 0
				},
				{ 
					name: 'Scopes for fun and profit',
					creatorName: 'John Doe',
					duration: '30 mins',
					level: 'Introductory',
				 	abstract: 'This sesssion will take a closer look at the scopes. Learn what they do, how they do it, and how to get them to do it for you.',
					upVoteCount: 0
				},
				{ 
					name: 'Well behaved Controllers', 
					creatorName: 'Jane Doe',
					duration: '2 hours',
					level: 'Intermediate',
				 	abstract: 'Controllers are the beginning of everything Angular related. Learn how to craft controllers that will win the respect of your friends and neighbors.',
					upVoteCount: 0 
				}
				
			]	
		}
		
		$scope.upVoteSession = function (session) {
			session.upVoteCount++;
		};
		
		$scope.downVoteSession = function (session) {
			if(session.upVoteCount >= 1)
				session.upVoteCount--; 
		};
	}	
);