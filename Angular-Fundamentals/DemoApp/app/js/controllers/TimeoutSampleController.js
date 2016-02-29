/**
 * Created by Wahid on 2/29/2016.
 */

'use strict';

eventsApp.controller('TimeoutSampleController',
    function TimeoutSampleController($scope, $timeout) {
        setTimeout(function(){
            $scope.name = "John Doe";
        }, 3000);

        $scope.cancel= function() {
            $timeout.cancel(promise);
        };
    }
);