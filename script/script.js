// window.addEventListener('load', function (event) {
//     var val = event.target.value;
//     var httpSurov = new XMLHttpRequest()
//     httpSurov.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             var valNatija = JSON.parse(this.responseText)
//             var UsdPrice = valNatija[23].cb_price
//             console.log(valNatija[23].cb_price);

//         };
//     };
//     httpSurov.open("GET", "https://nbu.uz/uz/exchange-rates/json/", true);
//     httpSurov.send();
// });
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
    var $checkbox = $('input[name="check"]')
    var $display1 = $('.display1')

    $('.Btn-button').on('click', function () {
    
        var httpSurov = new XMLHttpRequest()
        httpSurov.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var valNatija = JSON.parse(this.responseText)
                console.log(valNatija[23].cb_price % total);
                
             
                document.querySelector('#display1').innerHTML = Math.round(total / valNatija[23].cb_price)  + ` $ `;

            };
        };
        httpSurov.open("GET", "https://nbu.uz/uz/exchange-rates/json/", true);
        httpSurov.send();

        $('.display').css('display', 'flex')
        $('.display1').css('display', 'none')
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
    })


    $('.Btn-button').on("click", function (event) {


    })





    $checkbox.on('click', function () {
        // console.log($checkbox.is(":checked"));
        if ($checkbox.is(":checked") == true) {
            // false so'm yoqilsin dollar o'chirilsin
            $('.display1').css('display', 'flex')
            $('.display').css('display', 'none')
        } else if ($checkbox.is(":checked") == false) {
            // true so'm o'chirilsin dollar yoqilsin
            $('.display1').css('display', 'none')
            $('.display').css('display', 'flex')

        }
    })
});


$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        return false;
    }
    //  else if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
    //     disabledEvent(e);
    // }
});
$(document).keyup(function (e) {
    if (e.which == 44) {
        alert("11");
        e.preventDefault();
    }
});