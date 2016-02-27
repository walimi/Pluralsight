/**
 * Created by Wahid on 2/27/2016.
 */

'use strict';

eventsApp.controller('CacheSampleController',
    function CacheSampleController($scope, myCache) {
        $scope.addToCache = function(key, value) {
            myCache.put(key, value);
        };

        $scope.readFromCache = function(key) {
            return myCache.get(key);
        };

        $scope.getCacheStats = function() {
            return myCache.info();
        };
    }
);