'use strict';

app.config(function($routeProvider) {

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

	$routeProvider.otherwise({
		redirectTo: '/'
	});
});