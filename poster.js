$(document).ready(function () {
    console.log('hhh');
    var temp_div = $('<div></div>')
    temp_div.attr('class', 'part')
    temp_div.attr('id', 'part-1')
    temp_div.css('width', 200)
    temp_div.css('height', 200)
    temp_div.css('background-color', '#999999')
    temp_div.css('left', '48px')
    temp_div.css('top', '96px')
    $("#main-part").append(temp_div);
});