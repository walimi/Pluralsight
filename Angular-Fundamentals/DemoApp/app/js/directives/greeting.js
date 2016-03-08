/**
 * Created by Wahid on 3/8/2016.
 */
eventsApp
    .directive('greeting', function(){
       return {
           restrict: 'E',
           replace: true,
           template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
           controller: function GreetingController($scope){
               var greetings = ['hello'];
               $scope.sayHello = function() {
                   alert(greetings.join());
               }
               this.addGreeting = function(greeting) {
                   greetings.push(greeting);
               }
           }
       }
    })
    .directive('finnish', function() {
        return {
            restrict: 'A',
            require: 'greeting',
            link: function(scope, element, attrs, controller) {
                controller.addGreeting('hei');
            }
        }
    })
    .directive('turkish', function() {
        return {
            restrict: 'A',
            require: 'greeting',
            link: function(scope, element, attrs, controller) {
                controller.addGreeting('merhaba');
            }
        }
    });

