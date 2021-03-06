eventsApp.factory('eventData', function($resource) {

    var resource = $resource('/data/event/:id', {id:'@id'}, {"getAll": {method: "GET", isArray:true, params: {something: "foo"}}});

    return {
        getEvent: function(eventId) {
            return resource.get({id:eventId});
        },
        save: function(event) {
            event.id = 999; // this is just for demo. in real world app you'd have to grab the max id and add 1 to it.
            return resource.save(event);
        },
        getAllEvents: function() {
            return resource.query(); // returns an array.
        }
    };
});