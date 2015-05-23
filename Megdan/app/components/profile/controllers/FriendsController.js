

app.controller("FriendsController", function ($scope, profileService) {
    profileService.getOwnFriends(
        function (data) {
            $scope.friends = data;
        }
    );

    $scope.nameFilter = '';

});