'use strict';

app.factory('userService', function (baseUrl, authenticationService, $http){
	var serviceUrl = baseUrl + '/users';
	return{
		/**
		 * Get the user preview data
		 * @param  {string} targetUser The user
		 * @param  {[type]} success    [description]
		 * @param  {[type]} error      [description]
		 * @return {Object}            Object:{id, prifleImageData, username, name, gender}
		 */
		getUserPreviewData: function  (targetUser, success, error) {
			var request = {
				method: 'GET',
				url: serviceUrl + '/' + targetUser + '/preview',
				headers: authenticationService.getAuthenticationHeaders()
			};
			$http(request).success(success).error(error);
		},

		/**
		 * Gets the full data of the user
		 * @param  {string} targetUser Target user
		 * @param  {[type]} success    [description]
		 * @param  {[type]} error      [description]
		 * @return {Object}            {id, username, profileImageData, gender,
		 *  coverImageData, isFriend, hasPendingRequest}
		 */
		getUserFullData: function  (targetUser, success, error) {
			var request = {
				method: 'GET',
				url: serviceUrl + '/' + targetUser,
				headers: authenticationService.getAuthenticationHeaders()
			};
			$http(request).success(success).error(error);
		},

		/**
		 * Searrches all the users by a string in their usernames or names
		 * @param  {string} searchTerm The term wee are searching for
		 * @param  {[type]} success    [description]
		 * @param  {[type]} error      [description]
		 * @return {Array}            Array of objects{id, profileImageData, username, name, gender}
		 */
		searchUsersByName: function  (params, success, error) {
			var request = {
				method: 'GET',
				url: serviceUrl + '/search',
				params: params,
				headers: authenticationService.getAuthenticationHeaders()
			};
			$http(request).success(success).error(error);
		},

		/**
		 * Gets the paginated posts on friends wall
		 * @param  {string} targetUser  The target user
		 * @param  {Number} startPostId the starting posts to show from
		 * @param  {[type]} success     [description]
		 * @param  {[type]} error       [description]
		 * @return {Array}             Array with objects{
		 *                                   id,
		 *                                   author(id,profileImageData,username,name,gender),
		 *                                   wallOwner(id,profileImageData,username,name,gender),
		 *                                   "postContent": "Howdy folks!",
									        "date": "2015-12-22T00:00:00",
									        "likesCount": 2,
									        "liked": false,
									        "totalCommentsCount": 5,
									        "comments"
		 *
		 *                                   }
		 */
		getFriendWallByPages: function  (params, success, error) {
			var request = {
				method: 'GET',
				url: serviceUrl + '/' + targetUser + '/wall',
				headers: authenticationService.getAuthenticationHeaders(),
				params: params
			};
			$http(request).success(success).error(error);
		},

		getFriendsDetailedFriendsList: function  (targetUser, success, error) {
			var request = {
				method: 'GET',
				url: serviceUrl + '/' + targetUser + '/friends',
				headers: authenticationService.getAuthenticationHeaders()
			};
			$http(request).success(success).error(error);
		},

		getFriendsFriendsPreview: function  (targetUser, success, error) {
			var request = {
				method: 'GET',
				url: serviceUrl + '/' + targetUser + '/friends/preview',
				headers: authenticationService.getAuthenticationHeaders()
			};
			$http(request).success(success).error(error);
		}

	};
});

