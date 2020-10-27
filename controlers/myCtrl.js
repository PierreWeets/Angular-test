var app = angular.module('myApp', []); 

app.controller('myCtrl', function($scope) { // in 'app' define a controller with id 'myCtrl'
  $scope.firstName= "John";// display 'firstName' variable value in the view
  $scope.lastName= "Doe";

  $scope.changeName = function(text) { 
	if($scope.firstName ===	 "John"){
		$scope.firstName = text;
	}else{
		$scope.firstName = "Jane2";
	}
  }
  
  $scope.fullName = function() { // display the returned result of fullName() in the view
	return $scope.firstName + " " + $scope.lastName;
  }
})

app.directive("w3TestDirective", function() {
	return {
		template : "<h1>Made by a directive!</h1>"
		
	};
})