/**
 * Created by Wahid on 3/3/2016.
 */
'use strict';

eventsApp.controller('MainMenuController',
    function MainMenuController($scope, $location) {
        $scope.createEvent = function() {
            $location.url('/newEvent'); 
        };
    }
);