/**
 * Created by Wahid on 5/11/2016.
 */
'use strict';

eventsApp.factory('userData', ['userResource', function(userResource){
    return {
        getUser: function(userName, callback) {
            return userResource.get({userName: userName}, function(user) {
                if(callback) {
                    callback(user);
                }
            });
        },
        save: function(user) {
            userResource.save(user);
        },
        users: function() {
            return userResource.queryAll(function(users) {
               return users;
            });
        }
    }
}]);