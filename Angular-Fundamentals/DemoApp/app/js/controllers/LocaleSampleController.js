/**
 * Created by Wahid on 2/29/2016.
 */

'use strict';

eventsApp.controller('LocaleSampleController',
    function LocaleSampleController($scope, $locale) {
        $scope.myDate = Date.now();
        $scope.myFormat = $locale.DATETIME_FORMATS.fullDate; // we can also use .shortDate.
    }
);