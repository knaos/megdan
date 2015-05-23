'use strict';
app.controller('UserHeaderController', function  ($rootScope, $scope, $location, profileService, notifyService, authenticationService) {

	refreshFriendRequests();

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



	$scope.newPost = function function_name (argument) {
		// body...
	};

	//This indicates whether the drop down of friends should be shown
	$scope.showFriends = false;
	$scope.showFriendRequests = function function_name () {
		//Each time the link is clicked it inverts the showFriends boolean value

		$scope.showFriends = !($scope.showFriends);
		refreshFriendRequests();
	};

	$scope.acceptFriendRequest = function (request) {
		profileService.approveFriendRequest(request.id,
			function (response) {
				notifyService.showInfo(response.message);
				//Friend request status is changed for the view to remove the buttons and show
				//the accepted text
				request.status = 'accepted';
				refreshFriendRequests();
			},
			function (err) {
			notifyService.showError(err.message, err);
			});
	};

	$scope.rejectFriendRequest = function (request) {
		profileService.rejectFriendRequest(request.id,
			function (response) {
				notifyService.showInfo(response.message);
				request.status = 'rejected';
				refreshFriendRequests();
			},
			function (err) {
				notifyService.showError(err.message, err);
			});
	};

	$scope.logout = function logout () {
		authenticationService.logout();
		notifyService.showInfo('Logged out!');
		$location.path('/');

	};

	function refreshFriendRequests (){
		profileService.getFriendRequests(
			function (data) {

				$scope.friendRequests = data;
			},
			function (err) {
				notifyService.showError('could not load friend requests', err);
			}
		);
	}
});