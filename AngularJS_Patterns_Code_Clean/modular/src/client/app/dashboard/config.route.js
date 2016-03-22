(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .run(appRun);

    // appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/dashboard/dashboard.html',
                    controller: 'Dashboard',
                    controllerAs: 'vm',
                    title: 'dashboard',
                    resolve: {

                        message: function() {
                            toastr.warning('You resolved');
                            return { first: 'secret' };
                        },
                        mydata : function($q) {
                            var deferred = $q.defer();
                            deferred.resolve({first: 'another secret'});
                            return deferred.promise;
                        }
                    },
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }
        ];
    }
})();
