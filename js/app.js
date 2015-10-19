var myApp = angular.module("myApp", [
	"ngRoute",
	"mainCtrl"
]);

myApp.config(["$routeProvider", function($routeProvider){
	$routeProvider.
	when("/list", {
		templateUrl: "partial/list.html",
		controller: "ListCtrl"
	}).
	when("/details/:itemId", {
		templateUrl: "partial/details.html",
		controller: "DetailCtrl"
	}).
	otherwise({
		redirectTo: "/list"
	});
}]);