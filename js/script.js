//Мобильное меню:
const menuMobile = document.querySelector('.menu-mobile');
const showMenu = document.querySelector('.nav-menu');
const logoImage = document.querySelector('.header-logo-img');
const title = document.querySelector('.main-information');
const mobileLogo = document.querySelector('.header-logo-mobile-menu')
const mobileTitle = document.querySelector('.main-information-mobile-menu')

function showMobileMenu() {
  menuMobile.classList.toggle('active');
  showMenu.classList.toggle('active');
  logoImage.classList.toggle('active');
  title.classList.toggle('active');
  mobileLogo.classList.toggle('active');
  mobileTitle.classList.toggle('active');
};

menuMobile.addEventListener('click', showMobileMenu);

//Модальное окно:
const popupHidden = document.querySelector('.popup-hidden');
const btnPopupOpen = document.querySelector('.feedback');
const popupClose = document.querySelector('.popup-close');
const popupWrap = document.querySelector('.form-container-popup');

btnPopupOpen.addEventListener('click', popupOpen );

function popupOpen() {
  popupHidden.classList.add('active');
  attachModalEvents();
};

//Функция с добавлением обработчиков событий
function attachModalEvents() {
  popupClose.addEventListener('click', closedModal);
  document.addEventListener('keydown', handleEscape);
  popupHidden.addEventListener('click', modalCloseClickOutside);
};

//Функция закрытия модального окна
function closedModal() {
  popupHidden.classList.remove('active');
  detachModalEvents();
};

//Функция закрытия модального окна по кнопке Escape
function handleEscape(event) {
  if (event.key === 'Escape') {
    closedModal();
  };
};

//Функция закрытия модального окна по клику за областью окна
function modalCloseClickOutside(event) {
  if (!event.target.closest('.popup-container')) {
      closedModal();
  };
};

//Функция с удалением обработчиков после выполнения действия
function detachModalEvents() {
  popupClose.removeEventListener('click', closedModal);
  document.removeEventListener('keydown', handleEscape);
  popupHidden.removeEventListener('click', modalCloseClickOutside);
};
