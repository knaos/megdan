app.directive('topFriends', function () {
    return {
        templateUrl: 'app/shared/templates/top-friends.html',
        restrict: 'E',
        controller: 'TopFriendsController'
    }
});