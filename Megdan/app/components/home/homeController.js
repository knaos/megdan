'use strict';

app.controller('HomeController', function  ($scope, authenticationService, notifyService, $location) {

	$scope.userData = {};

	$scope.login = function login (userData) {
		authenticationService.login(userData,
			function success (data) {
				notifyService.showInfo('Successfully logged in!');
				$location.path('/');
			},
			function error (err) {
				notifyService('There was problem logging in!', err);
			});
	};
	/*
	Register and login as a sideffect
	 */
	$scope.register = function register (userData) {
		authenticationService.register(userData,
			function success (data) {
				authenticationService.login(userData);
				notifyService.showInfo('Successfully regsitered');
				$location.path('/');
			},
			function error (err) {
				notifyService('There was problem while registering!', err);
			});
	};
});