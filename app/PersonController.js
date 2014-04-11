(function() {  // add a controller to a module

    // 1. create controller
    var personController = function($routeParams) {
        this.personName = $routeParams.personName;

        this.people = [
            {name:'Ryan', city:'London', date:'2014-04-10', note:'the best :)'},
            {name:'Jianji', city:'Portland', date:'2014-04-11', note:'tied for last :('},
            {name:'Jon', city:'Portland', date:'2014-04-12', note:'tied for last :('}
        ];
    };

    // 2. tell Angular which objects are being injected, just in case minification changes the parameter names
    // order inside the list corresponds to the order of the parameters
    personController.$inject = ['$routeParams'];  // helps us avoid problems from minification

    // 3. include the controller in a module
    angular.module('peopleModule')
        .controller('personController', personController);

}());
