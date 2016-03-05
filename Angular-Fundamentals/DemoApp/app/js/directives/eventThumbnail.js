/**
 * Created by Wahid on 3/5/2016.
 */
'use strict';

eventsApp.directive('eventThumbnail', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/directives/eventThumbnail.html'
    }
});