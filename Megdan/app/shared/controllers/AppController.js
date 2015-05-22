'use strict';

app.controller('AppController', function ($scope, authenticationService) {
    $scope.authenticationService = authenticationService;
});