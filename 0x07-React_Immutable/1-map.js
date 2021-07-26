const { Map } = require('immutable');

function getImmutableObject(obj) {
    return Map(obj);
}

const example = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};
console.log(getImmutableObject(example));

module.export = [
    getImmutableObject
];
