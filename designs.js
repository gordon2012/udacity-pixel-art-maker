// Select color input
var color = $('#colorPicker');

// Select size input
var height = $('#inputHeight');
var width = $('#inputWeight');

var canvas = $('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
$('form input[type="submit"]').on('click', function(evt) {
    evt.preventDefault();
    makeGrid(Number(height.val()), Number(width.val()));
});

function makeGrid(height, width) {
    // Your code goes here!
    canvas.empty();

    var elements = '';
    for(var i = 0; i < height; i++) {
        elements += '<tr>';
        for(var j = 0; j < width; j++) {
            elements += '<td></td>';
        }
        elements += '</tr>';
    }
    canvas.append(elements);
}
makeGrid(20, 20);

canvas.on('mousedown', 'td', function(evt) {
    $(evt.target).css({'background': color.val()});
})

var mousedown = 0;
$(document).on('mousedown', function(evt) {
    if(evt.button == 0) {
        mousedown = 1;
    }
});
$(document).on('mouseup', function(evt) {
    if(evt.button == 0) {
        mousedown = 0;
    }
});
canvas.on('mouseover', 'td', function(evt) {
    if(mousedown) {
        $(evt.target).css({'background': color.val()});
    }
})
