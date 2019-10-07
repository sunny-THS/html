window.onload = function() {
    var app = angular.module('app', ['firebase']);
    app.controller('chatCtrl', ['$scope', '$firebase', function($scope, $firebase) {
      var name = 'Sơn';
      $scope.name = name;
      $scope.chatMessage = "";
      var ref = new Firebase("https://chatbox-509d2.firebaseio.com");
      var sync = $firebase(ref);
      $scope.chatMessages = sync.$asArray();
      $scope.sendChat = function() {
        var chatMessage = {
          name: name,
          message: $scope.chatMessage
        };
        $scope.chatMessages.$add(chatMessage);
        $scope.chatMessage = "";
      }
      $scope.clear = function() {
        for (var i = 0; i < $scope.chatMessages.length; i++) {
          $scope.chatMessages.$remove($scope.chatMessages[i]);
        }
      }
    }]);
     
  }
