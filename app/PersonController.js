(function() {  // add a controller to a module

    // 1. create controller
    var personController = function($scope, $routeParams) {
        $scope.person = null;
        var personName = $routeParams.personName;

        function init() {
            // find person with matching name
            var _name = personName.toLowerCase();
            for (var i=0, len=people.length; i<len; i++) {
                if (people[i].name.toLowerCase() === _name) {
                    $scope.person = people[i];
                    break;
                }
            }
        }

        // this is copy-pasted from PeopleController
        // we'll learn to make this DRY with factories/services later in the course
        var people = [
            {name:'Ryan', city:'London', date:'2014-04-10', note:'the best :)'},
            {name:'Jianji', city:'Portland', date:'2014-04-11', note:'tied for last :('},
            {name:'Jon', city:'Portland', date:'2014-04-12', note:'tied for last :('}
        ];

        init();
    };

    // 2. tell Angular which objects are being injected, just in case minification changes the parameter names
    // order inside the list corresponds to the order of the parameters
    personController.$inject = ['$scope', '$routeParams'];  // helps us avoid problems from minification

    // 3. include the controller in a module
    angular.module('peopleModule')
        .controller('personController', personController);

}());
