(function() {  // add a controller to a module

    // 1. create controller
    var personController = function($scope, $routeParams, peopleFactory) {
        $scope.person = null;
        var personName = $routeParams.personName;

        function init() {
            // find person with matching name
            var _name = personName.toLowerCase();
            var people = peopleFactory.getPeople();

            for (var i=0, len=people.length; i<len; i++) {
                if (people[i].name.toLowerCase() === _name) {
                    $scope.person = people[i];
                    break;
                }
            }
        }

        init();
    };

    // 2. tell Angular which objects are being injected, just in case minification changes the parameter names
    // order inside the list corresponds to the order of the parameters
    personController.$inject = ['$scope', '$routeParams',
                                'peopleFactory'];  // helps us avoid problems from minification

    // 3. include the controller in a module
    angular.module('peopleModule')
        .controller('personController', personController);

}());
