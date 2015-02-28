angular.module('starter.controllers', [])

.controller('AlarmsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
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
