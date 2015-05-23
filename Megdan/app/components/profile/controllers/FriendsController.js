

app.controller("FriendsController", function ($scope, profileService) {
    profileService.getOwnFriends(
        function (data) {
            $scope.friends = data;
        }
    );
    $scope.profileData = {};
    profileService.getDataAboutMe(function (data) {
        $scope.profileData = data;
    });

    $scope.nameFilter = '';

});