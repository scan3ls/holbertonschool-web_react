const $ = require('jquery');

const elements = [
    $('<p>').text('Copyright - Holberton School')
];

$('body').append(...elements);
