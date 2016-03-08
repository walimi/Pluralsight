/**
 * Created by Wahid on 3/8/2016.
 */
eventsApp.directive('greeting', function(){
   return {
       restrict: 'E',
       replace: true,
       template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
       controller: function($scope) {
           $scope.sayHello = function() {
               alert('Hello');
           }
       }

   };
});