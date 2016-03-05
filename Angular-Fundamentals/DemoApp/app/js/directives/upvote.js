/**
 * Created by Wahid on 3/5/2016.
 */
'use strict';

eventsApp.directive('upvote', function() {
    return {
        restrict: 'E',
        templateUrl: '/templates/directives/upvote.html',
        scope: {
            upvote: "&", // ampersand means that we're going to pass a function and execute that function in the parent scope
            downvote: "&",
            count: "@"  // equal sign means we're going to pass an object
        }
    }
});