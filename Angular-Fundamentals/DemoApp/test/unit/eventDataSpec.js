/**
 * Created by Wahid on 5/13/2016.
 */
'use strict';

describe('eventData', function(){

    beforeEach(module('eventsApp'));


    // $httpBackend is an Angular service that intercepts XML HTTP request calls and tell us what they are
    it('should issue a GET request to /data/event/11 when getEvent is called and the id is 11',
        inject(function(eventData, $httpBackend){
            $httpBackend.expectGET('/data/event/11');
            $httpBackend.when('GET', '/data/event/11').respond({});
            eventData.getEvent(11);
            $httpBackend.flush(); // this call makes the service go through any calls and report what happened

            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        })
    );
});