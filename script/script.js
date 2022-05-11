$(document).ready(function () {
    var $page = $('#page').val()
    var $design = $('#design').val()
    var $media = $('#media').val()
    var $seo = $('#seo').val()
    var $lang = $('#lang').val()
    var $name = $('#name').val()
    var $copy = $('#copy').val()

    $('.Btn-button').on('click', function () {
        function page() {
            let pages = $page
            for (i = 0; i <= pages; i += pages) {
               pages = pages * 100000
            }console.log(pages);
        }
        page()




    })
});