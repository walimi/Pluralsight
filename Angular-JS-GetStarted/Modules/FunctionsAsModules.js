// below is an example of Revealing Module Pattern in JavaScript

var createWorker = function () {
	
	// private variable 
	var workCount = 0;
	
	// private implementaion details
	var task1 = function () {
		workCount += 1;
		console.log("task1 " + workCount);
	};
	
	var task2 = function () {
		workCount += 1; 
		console.log("task2 " + workCount);
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