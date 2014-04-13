(function() {
    var peopleModule = angular.module('peopleModule', ['ngRoute']);
    // square brackets are for listing other module dependencies
    // here we're adding a dependency, or import, of the Angular route module

    // create routes for this module
    var myRouter = function($routeProvider) {
        $routeProvider
            .when('/',
            {
                controller: 'peopleController',
                templateUrl: 'app/views/people.html',
                controllerAs: 'ctrl'  // replaces "peopleController as ctrl" view syntax
                // see: http://sravi-kiran.blogspot.com/2013/11/ControllerAsSyntaxInAngularJs1.2.html
            })
            // .when('/person/:personName',
            // {
            //     controller: 'personController',
            //     templateUrl: '/app/views/person.html',
            //     controllerAs: 'ctrl2'
            // })
            .otherwise({ redirectTo: '/' });
    };

    // tell Angular which objects are being injected, just in case minification changes the parameter names
    // order inside the list corresponds to the order of the parameters
    // myRouter.$inject = ['$routeProvider'];  // helps us avoid problems from minification

    // include the routes in a module
    peopleModule.config(myRouter);
}());
// using the closure keeps us from exposing anything to the global environment
