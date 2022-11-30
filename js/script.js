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
        $('.popup-hidden').removeClass('active');
    });
});



// let page = document.querySelector('.page');
// let themeButton = document.querySelector('.theme-button');

// themeButton.onclick = function() {
//   page.classList.remove('light-theme');
//   page.classList.add('dark-theme');
// };




// const list = document.querySelector('.popup-close')
//  list.forEach(item =>{ 
//         item.addEventListener('click', (e) =>{
//         list.forEach(el=>{ popup-hidden.classList.remove('active'); });
//         item.classList.add('active')
//     })
// })



