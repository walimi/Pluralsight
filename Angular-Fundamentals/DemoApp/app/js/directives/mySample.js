/**
 * Created by Wahid on 3/5/2016.
 */
'use strict';

eventsApp.directive('mySample', function($compile){
    return {
        restrict: 'E',
        template: "<input type='text' ng-model='sampleData' /> {{sampleData}} <br />"
    };
});