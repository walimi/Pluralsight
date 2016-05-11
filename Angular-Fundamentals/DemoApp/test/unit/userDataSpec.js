/**
 * Created by Wahid on 5/11/2016.
 */
'use strict';

describe('userData', function(){
    var mockUserResource;

    beforeEach(module('eventsApp'));

    beforeEach(function(){
        mockUserResource = sinon.stub({get: function(){}});

        // In the following line of code we're explicitly telling Angular to return a mockUserResource
        // object whenever someone asks for userResource service.
        module(function($provide){
            $provide.value('userResource', mockUserResource);
        });

    });

    describe('getUser', function() {
      it('should call getresource.get with the username', inject(function(userData){
         userData.getUser('bob');

          expect(mockUserResource.get.args[0][0]).toEqual({userName: 'bob'});
      }))
    });
});