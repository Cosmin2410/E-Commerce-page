// Navigation

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

// Images

let firstClick = document.querySelector('.toggle');
let secondClick;
let counter = 1;

const allMainImages = document.querySelectorAll('.main-image');
const firstMainImage = document.querySelector('.one');
const secondMainImage = document.querySelector('.two');

const thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    counter++;
    if (counter % 2 === 0) {
      firstClick.classList.remove('toggle', 'change');
      secondClick = thumbnail;
      secondClick.classList.add('change');
    } else {
      secondClick.classList.remove('change');
      firstClick = thumbnail;
      firstClick.classList.add('change');
    }

    allMainImages.forEach((allMainImage) => {
      if (
        thumbnail.classList.contains('one') &&
        allMainImage.classList.contains('one')
      ) {
        allMainImage.classList.add('show');
      } else {
        allMainImage.classList.remove('show');
      }

      if (
        thumbnail.classList.contains('two') &&
        allMainImage.classList.contains('two')
      ) {
        allMainImage.classList.add('show');
      }

      if (
        thumbnail.classList.contains('three') &&
        allMainImage.classList.contains('three')
      ) {
        allMainImage.classList.add('show');
      }

      if (
        thumbnail.classList.contains('four') &&
        allMainImage.classList.contains('four')
      ) {
        allMainImage.classList.add('show');
      }
    });
  });
});
