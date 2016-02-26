'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventDataService) {
        $scope.saveEvent = function(event, newEventForm) {
            if(newEventForm.$valid) {
                eventDataService.save(event)
                    .$promise.then(
                        function(response) { console.log('success', response); },
                        function(response) { console.log('failure', response); }
                    );
            }
        };

        $scope.cancelEdit = function() {
            window.location = "/EventDetails.html";

        };
    }
);