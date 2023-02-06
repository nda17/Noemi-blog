const menuMobile = document.querySelector('.menu-mobile');
const mobileMenuHidden = document.querySelector('.nav-menu-hidden');

function showMobileMenu() {
  menuMobile.classList.toggle('active');
  mobileMenuHidden.classList.toggle('active');
};

menuMobile.addEventListener('click', showMobileMenu);






// document.querySelector('.menu-mobile').onclick = function() {
//   document.querySelector('.menu-mobile').classList.toggle('active');
//   document.querySelector('.nav-menu-hidden').classList.toggle('active');
// };

// document.querySelector('.feedback').onclick = function() {
//   document.querySelector('.popup-hidden').classList.toggle('active');
// };

// document.querySelector('.feedback-mobile-link').onclick = function() {
//   document.querySelector('.popup-hidden').classList.toggle('active');
// };

// document.querySelector('.popup-close').onclick = function() {
//   document.querySelector('.popup-hidden').classList.toggle('active');
// };



