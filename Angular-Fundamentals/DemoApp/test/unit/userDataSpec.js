/**
 * Created by Wahid on 5/11/2016.
 */
'use strict';

describe('userData', function(){
    var mockUserResource;

    beforeEach(module('eventsApp'));

    beforeEach(function(){
        // Creating mock userResource object and the methods associated with the real object.
        mockUserResource = sinon.stub({get: function(){}, save: function(){}});

        // In the following line of code we're explicitly telling Angular to return a mockUserResource
        // object whenever someone asks for userResource service.
        module(function($provide){
            $provide.value('userResource', mockUserResource);
        });

    });

    describe('getUser', function() {
        it('should call userResource.get with the username', inject(function(userData){
            userData.getUser('bob');
            expect(mockUserResource.get.args[0][0]).toEqual({userName: 'bob'});
        }));

        it('should return whatever userResource.get returns', inject(function(userData){
            mockUserResource.get.returns('angular rocks');
            var result = userData.getUser('bob');
            expect(result).toBe('angular rocks');
        }));
    });

    describe('save', function(){
        it('should call userResource.save with the same parameter', inject(function(userData){
            userData.save('some value');
            expect(mockUserResource.save.calledWith('some value')).toBe(true);
        }));
    });
});