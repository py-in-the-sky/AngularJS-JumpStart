// this style of declaration is paired with the view using the following controller declaration:
// ng-controller="PeopleController"
// function PeopleController($scope) {
//     $scope.sortBy = 'name';  // default sort field
//     $scope.reverse = false;  // default sort order

//     $scope.people = [
//         {name:'Ryan', city:'London', date:'2014-04-10', note:'the best :)'},
//         {name:'Jianji', city:'Portland', date:'2014-04-11', note:'tied for last :('},
//         {name:'Jon', city:'Portland', date:'2014-04-12', note:'tied for last :('}
//     ];

//     $scope.doSort = function(propName) {  // sorting function used by view
//         $scope.sortBy = propName;  // sortBy property used by view in ng-repeat
//         $scope.reverse = !$scope.reverse;  // switch sorting order (ascending/descending)
//     }
// }


// this style of declaration is paired with the view using the following controller declaration:
// ng-controller="PeopleController as ctrl"
// this syntactic approach provides more clarity in the view code when there
// are nested controllers (namespaces are made explicit), and I prefer this for now (10 April 2014)
// this difference in this JavaScript file is that we don't handle the $scope
// object but use 'this'
// function peopleController() {
//     this.sortBy = 'name';  // default sort field
//     this.reverse = false;  // default sort order

//     this.people = [
//         {name:'Ryan', city:'London', date:'2014-04-10', note:'the best :)'},
//         {name:'Jianji', city:'Portland', date:'2014-04-11', note:'tied for last :('},
//         {name:'Jon', city:'Portland', date:'2014-04-12', note:'tied for last :('}
//     ];

//     this.doSort = function(propName) {  // sorting function used by view
//         this.sortBy = propName;  // sortBy property used by view in ng-repeat
//         this.reverse = !this.reverse;  // switch sorting order (ascending/descending)
//     }
// }


// this adapts the above declaration for a controller but places the controller
// into a module
(function() {  // add a controller to a module

    // 1. create controller
    var peopleController = function() {
        this.sortBy = 'name';  // default sort field
        this.reverse = false;  // default sort order

        this.people = [
            {name:'Ryan', city:'London', date:'2014-04-10', note:'the best :)'},
            {name:'Jianji', city:'Portland', date:'2014-04-11', note:'tied for last :('},
            {name:'Jon', city:'Portland', date:'2014-04-12', note:'tied for last :('}
        ];

        this.doSort = function(propName) {  // sorting function used by view
            this.sortBy = propName;  // sortBy property used by view in ng-repeat
            this.reverse = !this.reverse;  // switch sorting order (ascending/descending)
        }
    }

    // 2. tell Angular which objects are being injected, just in case minification changes the parameter names
    // order inside the list corresponds to the order of peopleController's parameters
    // peopleController.$inject = ['$http'];  // helps us avoid problems from minification

    // 3. include the controller in a module
    angular.module('peopleModule')
        .controller('peopleController', peopleController);

}());
// doing the above declaration within this closure keeps peopleController from
// becoming a global variable: after the script parser is done, peopleController
// will be part of the peopleModule but will have never touched the global environment
