'use strict';

app.config(function($routeProvider) {
	
	$routeProvider.when('/', {
		templateUrl: 'components/home/homeView.html',
		controller: 'HomeController'
	});

	$routeProvider.otherwise({
		redirectTo: '/'
	});
});