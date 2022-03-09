const hamburgerMenu = document
  .querySelector('.ham-menu')
  .addEventListener('click', showPhoneMenu);

const phoneMenu = document.querySelector('.navigation-phone');
const background = document.querySelector('#overlay');
const closeMenu = document
  .querySelector('.close-menu')
  .addEventListener('click', closePhoneMenu);

function showPhoneMenu() {
  phoneMenu.classList.add('active');
  background.style.display = 'block';
}

function closePhoneMenu() {
  phoneMenu.classList.remove('active');
  background.style.display = 'none';
}
