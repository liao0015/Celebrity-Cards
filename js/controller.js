var mainCtrl = angular.module("mainCtrl", []);

mainCtrl.controller("ListCtrl", function($scope, $http){
	$http({
		method: "GET",
		url: "js/data.json"
	}).then(function successCallback(response){
		$scope.celebrities = response.data;
		$scope.numLimit = 10;
		$scope.random = function(){
			return 0.5-Math.random();
		};
	}, function errorCallback(response){
		console.log(response.statusText);
	});
});


mainCtrl.controller("DetailCtrl", function($scope, $http, $routeParams){
	$http({
		method: "GET",
		url: "js/data.json"
	}).then(function successCallback(response){
		$scope.celebrities = response.data;
		$scope.selectedItem = $routeParams.itemId;	
	}, function errorCallback(response){
		console.log(response.statusText);
	});
});