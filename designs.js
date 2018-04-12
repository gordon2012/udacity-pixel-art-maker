// Select color input
var color = $('#colorPicker');

// Select size input
var height = $('#inputHeight');
var width = $('#inputWeight');

var canvas = $('#pixelCanvas');

// When size is submitted by the user, call makeGrid()

// XXX
$('form input[type="submit"]').on('click', function(evt) {
    evt.preventDefault();
    makeGrid(Number(height.val()), Number(width.val()));
});




$('input[type="number"]').on('input', function(evt) {
    makeGrid();
});
$('input[type="number"]').on('keyup', function(evt) {
    makeGrid();
});




function makeGrid() {
    // Your code goes here!
    canvas.empty();

    var h = Number(height.val());
    var w = Number(width.val());

    var elements = '';
    for(var i = 0; i < h; i++) {
        elements += '<tr>';
        for(var j = 0; j < w; j++) {
            elements += '<td></td>';
        }
        elements += '</tr>';
    }
    canvas.append(elements);
}
makeGrid();

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
