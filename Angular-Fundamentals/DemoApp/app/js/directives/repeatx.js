/**
 * Created by Wahid on 3/9/2016.
 */
eventsApp.directive('repeatX', function() {
    return {
        link: function(scope, element, attributes, controller) {
            for (var i=0; i < Number(attributes.repeatX)-1; i++) {
                element.after(element.clone().attr('repeat-x', 0));
            }
        }
    };
});