/**
 * Created by Wahid on 2/29/2016.
 */

'use strict';

// we're using the $ sign in front of the service name b/c we want to override the angular exceptionHandler service
eventsApp.factory('$exceptionHandler', function() {
    return function(exception) {
        console.log('exception handled:' + exception.message);
    };
});