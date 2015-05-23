'use strict';

app.controller('TopFriendsController', function ($scope, profileService, notifyService) {

    profileService.getOwnFriends(function (data) {
        $scope.friends = data;
    },
        function (err) {
            notifyService.showError(err.message, err);
        });
});