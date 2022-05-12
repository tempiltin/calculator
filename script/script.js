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