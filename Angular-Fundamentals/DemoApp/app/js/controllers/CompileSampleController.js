/**
 * Created by Wahid on 2/29/2016.
 */

'use strict';

eventsApp.controller('CompileSampleController',
    function CompileSampleController($scope, $compile) {
        $scope.appendDivToElement = function (markup) {
            return $compile(markup) ($scope).appendTo(angular.element("#appendHere")); 
        };
    }
);