var framework_id = 0;
var content_type = 1;
var content_id = 0;
var temp_div;
var content;
var framework;
var bg_color = '#efefef';
var font_color = '#000000';
// var special_color = "#3456aa"
var special_color = HSVtoRGB(0.00, 0.6, 0.55);
var count = 0;

$(function () {
    $.getJSON('./content.json', function (data) {
        content = data['framework_' + content_type][content_id];

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
    head.attr('class', 'part')
        .css('left', framework['title'][0])
        .css('top', framework['title'][1])
        .css('font-size', framework['title'][2])
        .css('color', special_color);
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

            if (temp_content[0] != '') {
                temp_head = $('<h2>' + temp_content[0] + '</h2><hr>');
                temp_head.css('margin', '0');
                temp_div.append(temp_head);
                h -= 48;
            }

            try {
                var func = temp_content[1] +
                    '(id="' + 'part-' + index + '", height=' + h + ', width=' + w +
                    ', color="' + special_color + '")';
                eval(func);
            } catch (err) {
                temp_p = $('<p>' + temp_content[1] + '</p>');
                if (temp_content[1].length < 10) {
                    var font_size = Math.min(h, w / temp_content[1].length);
                    temp_p
                        .css('font-size', font_size)
                        .css('color', special_color)
                        .css('font-weight', 1000);

                }
                temp_p.css('margin', '0');
                temp_div.append(temp_p);
            }

            index++;
        } catch (err) {
            break;
        }
    }

    $('#main-part').css('background-color', bg_color).css('color', font_color);
    $('canvas').css('margin-top', '12px').css('background-color', bg_color);
    $('body').css('background-color', special_color);

}

function render() {
    $.getJSON('./content.json', function (data) {
        content = data['framework_' + content_type][content_id];

        $.getJSON('./framework.json', function (data) {
            framework = data['framework_' + framework_id];
            $("#main-part").remove();
            $('body').append($('<div id="main-part"></div>'));

            draw();
        });
    });
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

function save_body() {
    html2canvas(document.body).then(function (canvas) {
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

$(document).keypress(function (e) {
    console.log(e.keyCode);
    framework_id = e.keyCode - 49;
    render();
});

setInterval(function () {
    data_f = [0, 1]
    data_c = [0, 1, 2, 3]
    special_color = HSVtoRGB(Math.random(), 0.6, 0.55);
    framework_id = data_f[count % 2];
    content_id = data_c[Math.floor(Math.random() * 4)];
    render();
    // save_body();
    count++;
}, 1000);

function HSVtoRGB(h, s, v) {
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0:
            r = v, g = t, b = p;
            break;
        case 1:
            r = q, g = v, b = p;
            break;
        case 2:
            r = p, g = v, b = t;
            break;
        case 3:
            r = p, g = q, b = v;
            break;
        case 4:
            r = t, g = p, b = v;
            break;
        case 5:
            r = v, g = p, b = q;
            break;
    }

    return "#" + componentToHex(Math.round(r * 255)) + componentToHex(Math.round(g * 255)) + componentToHex(Math.round(b * 255));
}