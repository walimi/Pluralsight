/**
 * Created by Wahid on 3/1/2016.
 */
'use strict';


// Currently Angular Cookie store does not support cookie expiration. If you need to provide an expiration date
// for cookies you'll need to use a third party library.
eventsApp.controller('CookieStoreSampleController',
    function CookieStoreSampleController ($scope, $cookieStore) {
        $scope.event = {id: 1, name: "My Event"};

        $scope.saveEventToCookie = function(event) {
            $cookieStore.put('event', event);
        };

        $scope.getEventFromCookie = function() {
          console.log($cookieStore.get('event'));
        };

        $scope.removeEventFromCookie = function () {
            $cookieStore.remove('event');
        };
    }
);