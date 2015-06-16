var app = angular.module("myApp", []);

	app.controller('myCtr', function($scope){
		$scope.fisrt_name = "Yogesh";
		$scope.last_name = "Koli";

		$scope.fullname = function(){
			return $scope.fisrt_name + " " + $scope.last_name;
		}
	});