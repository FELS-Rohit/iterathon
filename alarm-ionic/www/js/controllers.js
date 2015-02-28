angular.module('starter.controllers', [])

.controller('AlarmsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('LightsCtrl', function($scope, $stateParams) {

  $scope.lightStatus = { on: true };

  $scope.lightStatusChange = function() {
  	console.log('licht ist ' + ($scope.lightStatus.on?"an":"aus"));
  };
})


.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
