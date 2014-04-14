// provides same data/functionality as PeopleFactory but uses the AngularJS
// service class rather than the factory class
(function () {

    // for services the function itselft is the object downstreams functions use
    // and therefore the services uses the 'this' syntax to create public methods and fields

    // this differs from the factory, where the factory returns an object that
    // contains the fields and methods that downstream functions use
    var peopleService = function () {
        var people = [
            {name:'Ryan', city:'London', date:'2014-04-10', note:'the best :)'},
            {name:'Jianji', city:'Portland', date:'2014-04-11', note:'tied for last :('},
            {name:'Jon', city:'Portland', date:'2014-04-12', note:'tied for last :('}
        ];
        this.getPeople = function () {
            return people;
        };
        this.getPerson = function (personName) {
            // find person with matching name
            var _name = personName.toLowerCase();

            for (var i=0, len=people.length; i<len; i++) {
                if (people[i].name.toLowerCase() === _name) {
                    return people[i];
                }
            }

            return null;
        };
    };

    angular.module('peopleModule').service('peopleService', peopleService);

}());
