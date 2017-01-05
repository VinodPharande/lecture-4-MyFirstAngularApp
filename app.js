(function(){
  'use strict';
  angular.module('myFirstApp', [])
  .controller('MyFirstController', function($scope){
      $scope.name = "Vinod";
      $scope.sayHello = function () {
        return "Hello coursera...!";
      }
  });
})();
