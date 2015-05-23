'use strict';

app.controller('SearchController', function ($scope, userService, notifyService) {
    $scope.userResults = [];

    $scope.params = {};
    var searchTimeout;

    $scope.search = function () {

        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(function () {
            if($scope.params.searchTerm){

                userService.searchUsersByName($scope.params,
                    function (userData) {
                        $scope.userResults = userData;
                    },
                    function (err) {
                        notifyService.showError('Something went wrong', err);
                    });

            } else{
                $scope.userResults = [];
            }
        } , 500);

    }
});