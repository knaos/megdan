'use strict';
app.controller('UserHeaderController', function  ($rootScope, $scope, $location, profileService, notifyService, authenticationService) {
	$scope.profileData = {};
	$scope.getDataAboutMe = function () {
		profileService.getDataAboutMe(
			function (data) {
				$scope.profileData = data;
			},
			function (err) {
				notifyService.showError('Could not get profile data', err);
			}
		)
	};

	$scope.getDataAboutMe();
	//Used to refresh header in case of profile editing
	$rootScope.$on('ProfileEdited', function () {
		$scope.getDataAboutMe();
	});

	profileService.getFriendRequests(
		function (data) {
			$scope.friendRequests = data;
		},
		function (err) {
			notifyService.showError('could not load friend requests', err);
		}
	);

	$scope.newPost = function function_name (argument) {
		// body...
	};

	$scope.showFriendRequests = function function_name (argument) {
		// body...
	};

	$scope.logout = function logout () {
		authenticationService.logout();
		notifyService.showInfo('Logged out!');
		$location.path('/');

	};
});