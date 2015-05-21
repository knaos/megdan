'use strict';

app.config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'app/components/home/templates/homeView.html',
		controller: 'HomeController'
	});

	$routeProvider.otherwise({
		redirectTo: '/'
	});
});