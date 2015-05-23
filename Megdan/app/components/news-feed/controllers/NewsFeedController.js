'use strict';

app.controller('NewsFeedController', function ($scope, profileService, notifyService, defaultPageSize) {
    $scope.posts = {};
    var params = {};

    params.PageSize = defaultPageSize;
    profileService.getNewsFeedPages(params,
        function (data) {
            $scope.posts = data;
        },
        function (err) {
            notifyService.showError(err.message, err);
        }
    );

    $scope.likePost = function () {

    };



});