'use strict';

app.controller('HomeController', function  ($scope, authenticationService, notifyService, $location) {

	$scope.authenticationService = authenticationService;
	$scope.userData = {};
	$scope.registerUserData = {};

	$scope.login = function login (userData) {
		authenticationService.login(userData,
			function success (data) {
				notifyService.showInfo('Successfully logged in!');
				$location.path('/');
			},
			function error (err) {
				notifyService.showError('There was problem logging in!', err);
			});
	};
	/*
	Register and login as a sideffect
	 */
	$scope.register = function register (userData) {
		authenticationService.register(userData,
			function success (data) {
				authenticationService.login(userData,
				 function (){},
				 function (err){
				 	notifyService.showInfo('Something went wrong',err);
				 });
				notifyService.showInfo('Successfully regsitered');
				$location.path('/');
			},
			function error (err) {
				notifyService.showError('There was problem while registering!', err);
			});
	};

	$scope.logout = function logout () {
		authenticationService.logout();
		notifyService.showInfo('Logged out!');
		
	};
});