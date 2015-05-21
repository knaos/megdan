"use strict";

app.factory('authenticationService',  function($http, baseUrl){
	
	var authenticationService = {};

	var serviceUrl = baseUrl + '/users';

	authenticationService.login = function login (loginData, success, error) {
		$http.post(serviceUrl + '/Login', loginData)
			.success(function  (data, status, headers, config) {
				sessionStorage.currentUser = JSON.stringify(data);
				success(data);
			}).error(error);
	};

	authenticationService.register = function register (registerData, success, error) {
		$http.post(serviceUrl + '/Register', registerData)
			.success(function  (data, status, headers, config) {
				success(data);
			}).error(error);
	};

	authenticationService.logout = function logout () {
		delete sessionStorage.currentUser;
	};

	authenticationService.getCurrentUser = function getCurrentUser () {
		var userObject = sessionStorage.currentUser;
		if (userObject) {
			return JSON.parse(userObject);
		}
	};

	authenticationService.isGuest = function isGuest () {
		var result = sessionStorage.currentUser == undefined;
		return result;
	};

	authenticationService.isLoggedIn = function isGuest () {
		var result = sessionStorage.currentUser != undefined;
		return result;
	};
	
	authenticationService.getAuthenticationHeaders = function getAuthenticationHeaders () {
		var headers = {};
		var currentUser = this.getCurrentUser();
		if (currentUser) {
			headers.Authorization = 'Bearer' + currentUser.access_token;
		}
		return headers;
	};

	return authenticationService;
});