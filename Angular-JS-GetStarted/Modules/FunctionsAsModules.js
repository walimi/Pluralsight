// below is an example of Revealing Module Pattern in JavaScript

var createWorker = function () {
	
	
	// private implementaion details
	var task1 = function () {
		console.log("task1");
	};
	
	var task2 = function () {
		console.log("task2");
	};
	
	// what's exposed to external clients
	return {
		job1: task1,
		job2: task2
	};
};

// client
var worker = createWorker();

worker.job1();
worker.job2();