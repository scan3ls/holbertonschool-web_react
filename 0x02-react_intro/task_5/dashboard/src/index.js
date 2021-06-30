const $ = require('jquery');

const header = $('<h1>Hello</h1>');
const subHeder = $('<h2>World</h2>');

$('body').append(header, subHeder);
