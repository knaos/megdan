'use strict';

app.controller('ChangePasswordController', function($scope, profileService, notifyService, $location){

    $scope.passwordData = {};
    $scope.updatePassword = function () {
        profileService.changeProfilePassword($scope.passwordData,
            function (response) {
                notifyService.showInfo(response.message);
                $location.path('/');
            },
            function (err) {
                notifyService.showError(err.message, err);
            });
    };
});