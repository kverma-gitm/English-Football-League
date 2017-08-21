//var myApp = angular.module('eplApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/view1.html',
        	// Which controller it should use 
            controller 		: 'firstcontroller',
            // what is the alias of that controller.
        	controllerAs 	: 'firstctrl'
        })
        .when('/all',{
        	templateUrl     : 'views/All.html',
        	controller 		: 'firstcontroller',
        	controllerAs 	: 'firstctrl'
        })
        .when('/info/:teamcode/:teamkey',{

        	templateUrl     : 'views/info.html',
            controller      : 'secondcontroller',
            controllerAs    : 'singleTeam'
        	
        })

        .otherwise(
            {
                
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);