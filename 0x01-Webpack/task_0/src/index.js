/* Basic setup */
const $ = require('jquery');

const paragraphs = [
    $('<p>').text('Holberton Dashboard'),
    $('<p>').text('Dashboard data for the students'),
    $('<p>').text('Copyright - Holberton School')
];

$('body').append(...paragraphs);
