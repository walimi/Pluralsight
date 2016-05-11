/**
 * Created by Wahid on 5/11/2016.
 */
'use strict';
describe('EditProfileControllerSpec', function() {

    var $controllerConstructor, scope, mockGravatarUrlBuilder;

    beforeEach(module("eventsApp"));

    beforeEach(inject(function($controller, $rootScope) {
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        mockGravatarUrlBuilder = sinon.stub({buildGravatarUrl: function() {}});
    }));

    it('should build a gravatar with a given email', function() {
        $controllerConstructor("EditProfileController",
            {'$scope': scope, gravatarUrlBuilder: mockGravatarUrlBuilder});

        var email = "wahid.alimi@gmail.com";
        scope.getGravatarUrl(email);
        expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBe(true);
    });

});