document.addEventListener('contextmenu', event => event.preventDefault());
$(document).ready(function () {
    var $page = $('input[name = page]')
    var $design = $('#design')
    var $media = $('#media')
    var $seo = $('#seo')
    var $lang = $('#lang')
    var $name = $('#name')
    var $copy = $('#copy')
    var $but = $('.Btn-button')

    $('.Btn-button').on('click', function () {
        $('.position').css('display', 'flex')
        $('.position').on('click', function () {
            $('.position').css('display', 'none')
        })
        var a = +$page.val() * 200000;
        var b = +$design.val();
        var c = +$media.val();
        var s = +$seo.val();
        var l = +$lang.val();
        var n = +$name.val();
        var py = +$copy.val();
        var total = a + b + c + s + l + n + py;
        $but.disabled = true;
        $('#display').html(total + ` so'm`);
        var arr = [a];
        for (var i = 0; i < arr.length; i++) {
            arr[i].$('input', function () {
                $but.disabled = false;
            })
        }
    })
});
$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        return false;
    } else if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
    }
});
$(document).keyup(function (e) {
    if (e.which == 44) {
        alert("11");
        e.preventDefault();
    }
});




