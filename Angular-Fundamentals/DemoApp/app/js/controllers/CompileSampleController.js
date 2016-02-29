/**
 * Created by Wahid on 2/29/2016.
 */

'use strict';

eventsApp.controller('CompileSampleController',
    function CompileSampleController($scope, $compile, $parse) {

        var fn = $parse('1 + 2');
        console.log(fn());

        var getter = $parse('event.name'); // getter is the name of the function

        var context1 = {event: {name: 'AngularJS Boot Camp'}};
        var context2 = {event: {name: 'Code Camp'}};

        console.log(getter(context1));
        console.log(getter(context2));

        console.log(getter(context2, context1)); // in this case context1 is the local context and will overwrite context2

        var setter = getter.assign;
        setter(context2, 'Code Retreat');

        console.log(context2.event.name);

        $scope.appendDivToElement = function (markup) {
            return $compile(markup) ($scope).appendTo(angular.element("#appendHere"));
        };
    }
);