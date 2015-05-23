'use strict';

app.config(function($routeProvider, $httpProvider) {

	$routeProvider.when('/', {
		templateUrl: 'app/components/home/templates/home-view.html',
		controller: 'HomeController'
	});

	$routeProvider.when('/profile', {
		templateUrl: 'app/components/profile/templates/edit-profile.html',
		controller: 'EditProfileController'
	});

	$routeProvider.when('/profile/password', {
		templateUrl: 'app/components/profile/templates/change-password.html',
		controller: 'ChangePasswordController'
	});

	$routeProvider.when('/profile/friends', {
		templateUrl: 'app/components/profile/templates/friends.html',
		controller: 'FriendsController'
	});

	$routeProvider.otherwise({
		redirectTo: '/'
	});

	$httpProvider.interceptors.push(function($q, $location) {
		return {
			'responseError': function(rejection){
				var defer = $q.defer();
				if(rejection.status == 401){
					$location.path('/');
				}
				defer.reject(rejection);
				return defer.promise;
			}
		};
	});
});