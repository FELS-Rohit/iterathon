angular.module('starter.controllers', [])

.controller('AlarmsCtrl', function($scope, Restangular) {
	var alarms = Restangular.all('alarms').getList().$object;
	$scope.alarms = alarms;
})

.controller('LightsCtrl', function($scope, Restangular) {

  $scope.lightStatus = Restangular.one("light").get().$object;

  $scope.lightStatusChange = function() {
  	setLightStatus($scope);
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


var setLightStatus = function($scope) {
  $scope.lightStatus.put();
};


// we debounce that because we do not want to send too much over the wire
var setLightColor = debounce(function($scope) {
	console.log('rot: ' + $scope.lightStatus.red);
  	console.log('grün: ' + $scope.lightStatus.green);
  	console.log('blau: ' + $scope.lightStatus.blue);
  	setLightStatus($scope);
}, 150);
