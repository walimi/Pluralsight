/**
 * Created by Wahid on 3/1/2016.
 */
'use strict';

eventsApp.controller('EventListController',
    function EventListController($scope, $location, eventData) {
        $scope.events = eventData.getAllEvents();
    }
);