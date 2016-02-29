/**
 * Created by Wahid on 2/29/2016.
 */

'use strict';

eventsApp.controller('TimeoutSampleController',
    function TimeoutSampleController($scope, $timeout) {
        var promise = $timeout(function(){
            $scope.name = "John Doe";
        }, 3000);
    }
);