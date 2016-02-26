eventsApp.factory('eventDataService', function($resource) {

    var resource = $resource('/data/event/:id', {id:'@id'});

    return {
        getEvent: function() {
            return resource.get({id:1});
        },
        save: function(event) {
            event.id = 9; // this is just for demo. in real life you'd have to grab the max id and add 1 to it.
            return resource.save(event);
        }
    };
});