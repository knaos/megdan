'use strict';

app.controller('NewsFeedController', function ($scope, profileService, notifyService, defaultPageSize, postService) {
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

    $scope.likePost = function (post) {
        postService.likePost(post.id,
            function () {
                notifyService.showInfo('Successfully liked');
                post.liked = true;
                post.likesCount++;
            },
            function (err) {
                notifyService.showError(err.message, err);
            })
    };

    $scope.unlikePost = function (post) {
        postService.unlikePost(post.id,
            function () {
                notifyService.showInfo('Successfully unliked');
                post.liked = false;
                post.likesCount--;
            },
            function (err) {
                notifyService.showError(err.message, err);
            })
    };

    $scope.likeComment = function (post, comment) {
        postService.likeComment(post.id, comment.id,
            function () {
                notifyService.showInfo('Successfully liked');
                comment.liked = true;
                comment.likesCount++;
            },
            function (err) {
                notifyService.showError(err.message, err);
            });
    };

    $scope.unlikeComment = function (post, comment) {
        postService.unlikeComment(post.id, comment.id,
            function () {
                notifyService.showInfo('Successfully unliked');
                comment.liked = false;
                comment.likesCount--;
            },
            function (err) {
                notifyService.showError(err.message, err);
            });
    };






});