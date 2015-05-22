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

	$routeProvider.otherwise({
		redirectTo: '/'
	});
});