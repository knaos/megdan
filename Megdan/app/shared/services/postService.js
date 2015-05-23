'use strict';

app.factory('postService', function ($http, authenticationService, baseUrl) {
    var serviceUrl = baseUrl + '/posts';
    return{

        getPostById: function (postId, success, error) {
            var request = {
                method: 'GET',
                url: serviceUrl + '/' + postId,
                headers: authenticationService.getAuthenticationHeaders()
            };
            $http(request).success(success).error(error);
        },

        addNewPost: function (postData, success, error) {
            var request = {
                method: 'POST',
                url: serviceUrl,
                headers: authenticationService.getAuthenticationHeaders(),
                data: postData
            };
            $http(request).success(success).error(error);
        },

        editPostById: function (postId, postData, success, error) {
            var request = {
                method: 'PUT',
                url: serviceUrl + '/' + postId,
                headers: authenticationService.getAuthenticationHeaders(),
                data: postData
            };
            $http(request).success(success).error(error);
        },

        deletePostById: function (postId, success, error) {
            var request = {
                method: 'DELETE',
                url: serviceUrl + '/' + postId,
                headers: authenticationService.getAuthenticationHeaders()
            };
            $http(request).success(success).error(error);
        },

        getPostDetaileLikes: function (postId, success, error) {
            var request = {
                method: 'GET',
                url: serviceUrl + '/' + postId + '/likes',
                headers: authenticationService.getAuthenticationHeaders()
            };
            $http(request).success(success).error(error);
        },

        getPostPreviewLikes: function (postId, success, error) {
            var request = {
                method: 'GET',
                url: serviceUrl + '/' + postId + '/likes/preview',
                headers: authenticationService.getAuthenticationHeaders()
            };
            $http(request).success(success).error(error);
        },

        likePost: function (postId, success, error) {
            var request = {
                method: 'POST',
                url: serviceUrl + '/' + postId + '/likes',
                headers: authenticationService.getAuthenticationHeaders()
            };
            $http(request).success(success).error(error);
        },

        unlikePost: function (postId, success, error) {
            var request = {
                method: 'DELETE',
                url: serviceUrl + '/' + postId + '/likes',
                headers: authenticationService.getAuthenticationHeaders()
            };
            $http(request).success(success).error(error);
        },

        getPostComments: function (postId, success, error) {
            var request = {
                method: 'GET',
                url: serviceUrl + '/' + postId + '/comments',
                headers: authenticationService.getAuthenticationHeaders()
            };
            $http(request).success(success).error(error);
        },

        addCommentToPost: function (postId, commentData, success, error) {
            var request = {
                method: 'POST',
                url: serviceUrl + '/' + postId + '/comments',
                headers: authenticationService.getAuthenticationHeaders(),
                data: commentData
            };
            $http(request).success(success).error(error);
        },

        editPostComment: function (postId, commentData, commentId, success, error) {
            var request = {
                method: 'PUT',
                url: serviceUrl + '/' + postId + '/comments/' + commentId,
                headers: authenticationService.getAuthenticationHeaders(),
                data: commentData
            };
            $http(request).success(success).error(error);
        },

        deletePostComment: function (postId, commentId, success, error) {
            var request = {
                method: 'DELETE',
                url: serviceUrl + '/' + postId + '/comments/' + commentId,
                headers: authenticationService.getAuthenticationHeaders()
            };
            $http(request).success(success).error(error);
        },

        getCommentDetailedLikes: function (postId, commentId, success, error) {
            var request = {
                method: 'GET',
                url: serviceUrl + '/' + postId + '/comments/' + commentId + '/likes',
                headers: authenticationService.getAuthenticationHeaders()
            };
            $http(request).success(success).error(error);
        },

        likeComment: function (postId, commentId, success, error) {
            var request = {
                method: 'POST',
                url: serviceUrl + '/' + postId + '/comments/' + commentId + '/likes',
                headers: authenticationService.getAuthenticationHeaders()
            };
            $http(request).success(success).error(error);
        },

        unlikeComment: function (postId, commentId, success, error) {
            var request = {
                method: 'DELETE',
                url: serviceUrl + '/' + postId + '/comments/' + commentId + '/likes',
                headers: authenticationService.getAuthenticationHeaders()
            };
            $http(request).success(success).error(error);
        }


    };
});