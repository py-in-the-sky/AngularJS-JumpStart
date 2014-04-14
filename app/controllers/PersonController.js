(function() {  // add a controller to a module

    // 1. create controller
    var personController = function($scope, $routeParams, peopleFactory) {
        $scope.person = peopleFactory.getPerson($routeParams.personName);
    };
    // the interfaces for using a service vs factory are the same
    // var personController = function($scope, $routeParams, peopleService) {
    //     $scope.person = peopleService.getPerson($routeParams.personName);
    // };

    // 2. tell Angular which objects are being injected, just in case minification changes the parameter names
    // order inside the list corresponds to the order of the parameters
    personController.$inject = ['$scope', '$routeParams',  // helps us avoid problems from minification
                                'peopleFactory'];
                                // 'peopleService'];

    // 3. include the controller in a module
    angular.module('peopleModule')
        .controller('personController', personController);

}());
