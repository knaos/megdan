'use strict';
app.controller('UserHeaderController', function  ($scope) {
	$scope.username = sessionStorage.currentUser.name;
});