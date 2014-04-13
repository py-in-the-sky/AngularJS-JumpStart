// moved routing to the module js page

// (function() {  // add routes to a module

//     // 1. create routes
//     var myRouter = function($routeProvider) {
//         $routeProvider
//             .when('/',
//             {
//                 controller: 'peopleController',
//                 templateUrl: '/app/views/people.html'
//             })
//             .when('/person/:personName',
//             {
//                 controller: 'personController',
//                 templateUrl: '/app/views/person.html'
//             })
//             .otherwise({ redirectTo: '/' });
//     };

//     // 2. tell Angular which objects are being injected, just in case minification changes the parameter names
//     // order inside the list corresponds to the order of the parameters
//     myRouter.$inject = ['$routeProvider'];  // helps us avoid problems from minification

//     // 3. include the routes in a module
//     angular.module('peopleModule').config(myRouter);

// }());
