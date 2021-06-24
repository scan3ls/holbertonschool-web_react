const $ = require('jquery');

const header = $('<header>');
const logo = $('<img id="#logo">');
const h1 = $('<h1>').text('Holberton Dashboard');
header.append(logo, h1);

$('body').append(header);
console.log('Init header');