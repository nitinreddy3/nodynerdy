var events = require('events');
var util = require('util');

var Person = function(name) {
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var nitin = new Person('nitin');
var paree = new Person('paree');
var rajat = new Person('rajat');

var people = [nitin, paree, rajat];

people.forEach((person) => {
    person.on('speak', (msg) => {
        console.log(person.name + ' speaks ' + msg);
    })
});

nitin.emit('speak', 'Pareekshit bro');
paree.emit('speak', 'Kya kar raho');
rajat.emit('speak', 'abe');