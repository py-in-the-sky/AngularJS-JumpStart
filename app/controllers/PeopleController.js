// this adapts the above declaration for a controller but places the controller
// into a module
(function() {  // add a controller to a module

    // 1. create controller
    var peopleController = function($scope, $log, peopleFactory, moduleSettings) {
        $scope.sortBy = 'name';  // default sort field
        $scope.reverse = false;  // default sort order
        $scope.moduleSettings = moduleSettings;
        $scope.people = peopleFactory.getPeople();
        $scope.deleted = [];

        // ********** FOR AJAX
        // $scope.people = null;

        // peopleFactory.getPeople().
        //     .success(function(people) {
        //         $scope.people = people;
        //     })
        //     .error(function(data, status, headers, config) {
        //         $log.log(data.error + ': ' + status);
        //     });
        // *********************

        $scope.doSort = function(propName) {  // sorting function used by view
            $scope.sortBy = propName;  // sortBy property used by view in ng-repeat
            $scope.reverse = !$scope.reverse;  // switch sorting order (ascending/descending); Boolean
        };
        $scope.namePrefixFilter = function(nameFilter) {
            // see: http://stackoverflow.com/questions/16474091/angular-custom-filter-function

            // var _name = nameFilter.toLowerCase() || '';
            var _name = nameFilter === undefined ? '' : nameFilter.toLowerCase();
            var filter = function (obj) {
                // obj.name and userValue are strings
                // returns true if userValue is a prefix of obj.name, otherwise false
                // also returns true if no value for nameFilter has been entered yet
                return obj.name.toLowerCase().indexOf(_name) === 0;
            }
            // returns a function that takes an object and returns a Boolean
            // indicating whether that object should be filtered in or out
            return filter
        };
        $scope.deletePerson = function(personName) {
            // stub
        };
        $scope.smiley = function(note) {
            var _smiley = ':)';
            // success and danger are Bootstrap classes
            return note.indexOf(_smiley) >= 0 ? 'success' : 'danger';
        }
    };

    // 2. tell Angular which objects are being injected, just in case minification changes the parameter names
    // order inside the list corresponds to the order of peopleController's parameters
    peopleController.$inject = ['$scope', '$log', 'peopleFactory',  // helps us avoid problems from minification
                                'moduleSettings'];

    // 3. include the controller in a module
    angular.module('peopleModule')
        .controller('peopleController', peopleController);

}());
// doing the above declaration within this closure keeps peopleController from
// becoming a global variable: after the script parser is done, peopleController
// will be part of the peopleModule but will have never touched the global environment
