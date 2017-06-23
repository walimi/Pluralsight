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
    asyncMethod('Do stuff').then(function() {})
}

function validateUser() {
    asyncMethod('Validate User').then(doStuff)
}

function findUser() {
    asyncMethod('Find User').then(validateUser)
}

asyncMethod('Open DB Connection').then(findUser)