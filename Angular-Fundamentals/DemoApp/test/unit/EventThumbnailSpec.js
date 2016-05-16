/**
 * Created by Wahid on 5/16/2016.
 */
'use strict';

describe('eventThumbnail', function() {
    var el;
    beforeEach(module('eventsApp'));
    beforeEach(module('/templates/directives/eventThumbnail.html'));

    beforeEach(inject(function($compile, $rootScope){
        var scope = $rootScope.$new();
        scope.event = {
            name: 'Angular Expo', date: '1/1/2050', time: '10:30',
            location: { address: '123 Fake St.', city: 'NY', province: 'NY' },
            id: 1
        };

        el = angular.element('<event-thumbnail event="event" />');
        $compile(el)(scope);
        scope.$digest();
        console.log(el[0].outerHTML);
    }));

    it('should bind the data', function(){
        expect(el.text()).toContain('Angular Expo');
    })
});