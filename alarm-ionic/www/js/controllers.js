angular.module('starter.controllers', [])

.controller('AlarmsCtrl', function($scope, Restangular) {
	var alarms = Restangular.all('alarms').getList().$object;
	$scope.alarms = alarms;
})

.controller('LightsCtrl', function($scope, $stateParams) {

  $scope.lightStatus = {
  	on: true,
  	red: 128,
  	green: 128,
  	blue: 128
  };

  $scope.lightStatusChange = function() {
  	console.log('licht ist ' + ($scope.lightStatus.on?"an":"aus"));
  };

  $scope.lightColorChange = function() {
  	setLightColor($scope);
  	
  };
})


.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});


var setLightColor = debounce(function($scope) {
	console.log('rot: ' + $scope.lightStatus.red);
  	console.log('grün: ' + $scope.lightStatus.green);
  	console.log('blau: ' + $scope.lightStatus.blue);
}, 150);
