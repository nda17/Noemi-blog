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

// $(document).ready(function () {
//     $('.popup-close').click(function (event) {
//         $('.popup-hidden').removeClass('active');
//     });
// });





// const list = document.querySelectorAll('.popup-close')
//  list.forEach(item =>{ 
//         item.addEventListener('click', (e) =>{
//         list.forEach(el=>{ el.classList.remove('active'); });
//         item.classList.add('active')
//     })
// })


let list = document.querySelectorAll('.popup-close')
 list.forEach(item =>{
        item.addEventListener('click', (e) =>{
            item.classList.toggle('active')
        });
    });





