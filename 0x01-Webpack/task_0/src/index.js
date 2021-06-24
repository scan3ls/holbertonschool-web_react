/* Basic setup */
const $ = require('jquery');

const paragraphs = [
    $('<p>').text('Holberton Dashboard'),
    $('<p>').text('Dashboard data for the students'),
    $('<p>').text('Copyright - Holberton School')
];

$('body').append(...paragraphs);

// $('body').append('<p>Holberton Dashboard</p>'); $('body').append('<p>Dashboard data for the students</p>'); $('body').append('<p>Copyright - Holberton School</p>');
