// Simulating some sort of async call. 
function asyncMethod(message) {
    
    // returning a promise
    return new Promise(function(fulfill, reject){
        setTimeout(function() {
            console.log(message);
            fulfill();
        }, 500);    
    });
}

function doStuff() {
    return asyncMethod('Do stuff');
}

function validateUser() {
    return asyncMethod('Validate User');
}

function findUser() {
    return asyncMethod('Find User');
}

asyncMethod('Open DB Connection')
    .then(findUser)
    .then(validateUser)
    .then(doStuff)
    .then(function() {})