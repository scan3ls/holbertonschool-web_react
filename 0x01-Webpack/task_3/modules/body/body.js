const $ = require('jquery');

const elements = [
    $('<p>').text('Dashboard data for the students'),
    $('<button>').text('Click here to get started'),
    $("<p id='count'></p>")
];

$('body').append(...elements);

function updateCounter(count) {
    count += 1;
    $('#count').text(count);
}

// _.debounce 500

$('button').click(() => {
    const count = parseInt($('#count')['0'].innerText) | 0;
    updateCounter(count);
});
