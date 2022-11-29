$(document).ready(function () {
    $('.menu-mobile').click(function (event) {
        $('.menu-mobile, .nav-menu, .nav-menu-list, .nav-menu-hidden, .menu-list-hidden').toggleClass('active');
    });
});

$(document).ready(function () {
    $('.feedback').click(function (event) {
        $('.popup-hidden').toggleClass('active');
    });
});

$(document).ready(function () {
    $('.popup-close').click(function (event) {
        $('.feedback').click;
    });
});




 
