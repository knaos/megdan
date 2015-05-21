'use strict';
/*
Here are all the services based on the 'me' URL
 */
app.factory('profileService', function  ($scope, $http, baseUrl, authenticationService,
 notifyService, defaultPageSize) {
	
	var serviceUrl = baseUrl + '/me';
	return{

		/*
		returns:
		{
		    "id": "8690c86b-a65b-49c8-90c1-60dc1a7ac370",
		    "username": "testtest",
		    "name": "testtest",
		    "email": "testtest@yahoo.mx",
		    "profileImageData": null,
		    "gender": 1,
		    "coverImageData": null
		}
		 */
		getDataAboutMe: function  (success, error) {
			var headers = {
				method: 'GET',
				url: serviceUrl,
				headers: authenticationService.getAuthenticationHeaders()
			};
			$http(headers).success(success).error(error);
		},

		/*
		Returns: array of friends
		 */
		getOwnFriends: function  (success, error) {
			var headers = {
				method: 'GET',
				url: serviceUrl + '/friends',
				headers: authenticationService.getAuthenticationHeaders()
			};
			$http(headers).success(success).error(error);
		},
		/*
		Returns array of friend requests
		 */
		getFriendRequests: function  (success, error) {
			var headers = {
				method: 'GET',
				url: serviceUrl + '/requests',
				headers: authenticationService.getAuthenticationHeaders()
			};
			$http(headers).success(success).error(error);
		},
		/**
		 * Sends a friend request
		 * @param  {string} targetUsername Username of target
		 * @param  {[type]} success  [description]
		 * @param  {[type]} error    [description]
		 * @return {message}          Success, error message
		 */
		sendFriendRequest: function  (targetUsername, success, error) {
			var headers = {
				method: 'POST',
				url: serviceUrl + '/friends/' + targetUsername,
				headers: authenticationService.getAuthenticationHeaders()
			};
			$http(headers).success(success).error(error);
		},

		/**
		 * Approve friend request
		 * @param  {string} requestId Target request id
		 * @param  {function} success   Success fun
		 * @param  {function} error     Error function
		 * @return {message}           Return message
		 */
		approveFriendRequest: function  (requestId, success, error) {
			var headers = {
				method: 'PUT',
				url: serviceUrl + '/requests/' + requestId + '?status=approved',
				headers: authenticationService.getAuthenticationHeaders()
			};
			$http(headers).success(success).error(error);
		},
		/**
		 * Reject friend request
		 * @param  {string} requestId Target request ID
		 * @param  {function} success   Success function
		 * @param  {function} error     Error function
		 * @return {string}           Response message
		 */
		rejectFriendRequest: function  (requestId, success, error) {
			var headers = {
				method: 'PUT',
				url: serviceUrl + '/requests/' + requestId + '?status=rejected',
				headers: authenticationService.getAuthenticationHeaders()
			};
			$http(headers).success(success).error(error);
		},

		/**
		 * Gets the news feed
		 * @param  {int} startPostId The amount of posts from which it starts counting
		 * @param  {[type]} success     [description]
		 * @param  {[type]} error       [description]
		 * @return {array}             Array of posts
		 */
		getNewsFeedPages: function  (startPostId, success, error) {
			var headers = {
				method: 'GET',
				url: serviceUrl + '/feed?StartPostId=' + startPostId + '&PageSize=' + defaultPageSize,
				headers: authenticationService.getAuthenticationHeaders()
			};
			$http(headers).success(success).error(error);
		},

		/**
		 * Changes the password. 
		 * @param  {Object} passwordData    Should contain oldPassword, newPassword, confirmPassword
		 * @param  {[type]} success [description]
		 * @param  {[type]} error   [description]
		 * @return {String}         Message
		 */
		changeProfilePassword: function  (passwordData, success, error) {
			var headers = {
				method: 'PUT',
				url: serviceUrl + '/changepassword',
				headers: authenticationService.getAuthenticationHeaders(),
				data: passwordData
			};
			$http(headers).success(success).error(error);
		},
		/**
		 * Edit profile service
		 * @param  {object} profileData Should containt name, 
		 * email, profileImageData, coverImageData, gender
		 * @param  {[type]} success     [description]
		 * @param  {[type]} error       [description]
		 * @return {[type]}             [description]
		 */
		editProfile: function  (profileData, success, error) {
			var headers = {
				method: 'PUT',
				url: serviceUrl,
				headers: authenticationService.getAuthenticationHeaders(),
				data: profileData
			};
			$http(headers).success(success).error(error);
		},

	};
});