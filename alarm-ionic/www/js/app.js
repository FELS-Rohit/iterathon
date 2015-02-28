// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var module = angular.module('starter', [ 'ionic', 'starter.controllers',
		'starter.services', 'restangular', 'ngCookies' ])

module.run(function($ionicPlatform, Restangular, $cookies) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory
		// bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});

	Restangular.setBaseUrl($cookies.baseUrl);	

});

module.config(function($stateProvider, $urlRouterProvider) {

	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider

	// setup an abstract state for the tabs directive
	.state('tab', {
		url : "/tab",
		abstract : true,
		templateUrl : "templates/tabs.html"
	})

	// Each tab has its own nav history stack:

	.state('tab.alarms', {
		url : '/alarms',
		views : {
			'tab-alarms' : {
				templateUrl : 'templates/tab-alarms.html',
				controller : 'AlarmsCtrl'
			}
		}
	})

	.state('tab.lights', {
		url : '/lights',
		views : {
			'tab-lights' : {
				templateUrl : 'templates/tab-lights.html',
				controller : 'LightsCtrl'
			}
		}
	})

	.state('tab.settings', {
		url : '/settings',
		views : {
			'tab-settings' : {
				templateUrl : 'templates/tab-settings.html',
				controller : 'SettingsCtrl'
			}
		}
	});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/tab/alarms');

});

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate)
				func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow)
			func.apply(context, args);
	};
};

