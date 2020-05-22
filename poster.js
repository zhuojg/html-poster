var framework_id = 1;
var content_id = 0;
var temp_div;
var content;
var framework;
var bg_color = '#efefef';
var font_color = '#000000';
var special_color = "#213456"

$(function () {


    $.getJSON('./content.json', function (data) {
        content = data['framework_' + framework_id][content_id];

        $.getJSON('./framework.json', function (data) {
            framework = data['framework_' + framework_id];
            draw();
        });
    });
});

function draw() {
    var size = framework['size']
    $('#main-part').css('width', size[0]);
    $('#main-part').css('height', size[1]);

    head = $('<h1>' + content['title'] + '</h1>');
    head.attr('class', 'part');
    head.css('left', framework['title'][0]);
    head.css('top', framework['title'][1]);
    head.css('font-size', framework['title'][2]);
    $('#main-part').append(head);

    var index = 0;
    while (1) {
        try {
            var temp_size = framework['element_' + index]
            x = temp_size[0]
            y = temp_size[1]
            w = temp_size[2]
            h = temp_size[3]
            temp_div = $('<div></div>');
            temp_div.attr('class', 'part');
            temp_div.attr('id', 'part-' + index);
            temp_div.css('height', h);
            temp_div.css('width', w);
            temp_div.css('left', x);
            temp_div.css('top', y);

            $("#main-part").append(temp_div);

            temp_content = content['element'][index];

            temp_head = $('<h2>' + temp_content[0] + '</h2><hr>');
            temp_head.css('margin', '0');
            temp_div.append(temp_head);

            try {
                var func = temp_content[1] + '(id="' + 'part-' + index + '", height=' + (h - 48) + ', width=' + w + ', color="#213456")';
                eval(func);
            } catch (err) {
                console.log(err);
                temp_p = $('<p>' + temp_content[1] + '</p>');
                temp_div.append(temp_p);
            }

            index++;
        } catch (err) {
            break;
        }
    }

    $('#main-part').css('background-color', bg_color).css('color', font_color);
    $('canvas').css('margin-top', '12px').css('background-color', bg_color)
    
}

function save() {
    html2canvas(document.getElementById("main-part")).then(function (canvas) {
        var MIME_TYPE = "image/png";
        var imgURL = canvas.toDataURL(MIME_TYPE);

        var dlLink = document.createElement('a');
        dlLink.download = 'test.png';
        dlLink.href = imgURL;
        dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

        document.body.appendChild(dlLink);
        dlLink.click();
        document.body.removeChild(dlLink);
    });
}