document.querySelector('.menu-mobile').onclick = function() {
  document.querySelector('.menu-mobile').classList.toggle('active');
  document.querySelector('.nav-menu-hidden').classList.toggle('active');
};

document.querySelectorAll('.feedback').onclick = function() {
  document.querySelectorAll('.popup-hidden').classList.toggle('active');
};

document.querySelectorAll('.popup-close').onclick = function() {
  document.querySelectorAll('.popup-hidden').classList.toggle('active');
};


// $(document).ready(function () {
//     $('.menu-mobile').click(function (event) {
//         $('.menu-mobile, .nav-menu, .nav-menu-list, .nav-menu-hidden, .menu-list-hidden').toggleClass('active');
//     });
// });

// $(document).ready(function () {
//     $('.feedback').click(function (event) {
//         $('.popup-hidden').toggleClass('active');
//     });
// });

// $(document).ready(function () {
//     $('.popup-close').click(function (event) {
//         $('.popup-hidden').removeClass('active');
//     });
// });



// let listMenu- = document.querySelector('.menu-mobile, .nav-menu, .nav-menu-list, .nav-menu-hidden, .menu-list-hidden');
// let menuMobile = document.querySelectorAll('.menu-mobile');


