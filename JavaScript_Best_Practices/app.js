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

asyncMethod('Open DB Connection').then(function() {
    asyncMethod('Find User').then(function() {
        asyncMethod('Validate User').then(function() {
            asyncMethod('Do stuff').then(function() {})
        })
    })
})