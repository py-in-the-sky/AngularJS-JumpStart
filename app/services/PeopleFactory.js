(function () {

    var peopleFactory = function() {
        var people = [
            {name:'Ryan', city:'London', date:'2014-04-10', note:'the best :)'},
            {name:'Jianji', city:'Portland', date:'2014-04-11', note:'tied for last :('},
            {name:'Jon', city:'Portland', date:'2014-04-12', note:'tied for last :('}
        ];
        var factory = {
            getPeople: function () {
                return people;
            },
            getPerson: function (personName) {
                // find person with matching name
                var _name = personName.toLowerCase();

                for (var i=0, len=people.length; i<len; i++) {
                    if (people[i].name.toLowerCase() === _name) {
                        return people[i];
                    }
                }

                return null;
            }
        };

        return factory;
    };

    angular.module('peopleModule').factory('peopleFactory', peopleFactory);

}());
