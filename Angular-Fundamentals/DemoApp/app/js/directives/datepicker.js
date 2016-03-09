/**
 * Created by Wahid on 3/9/2016.
 */
eventsApp.directive('datePicker', function() {
   return {
       restrict: 'A',
       link: function(scope, element) {
           element.datepicker();
       }
   }
});