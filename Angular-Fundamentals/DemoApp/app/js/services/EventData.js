eventsApp.factory('eventData', function($http, $log) {

    return {
        getEvent: function(succcesscb) {
            $http({method: 'GET',
                   url: 'data/event/1'})
                .success(function(data, status, headers, config) {
                    succcesscb(data);
                })
                .error(function(data, status, headers, config) {
                    $log.warn(data, status, headers(), config);
                });
        }

    };
});