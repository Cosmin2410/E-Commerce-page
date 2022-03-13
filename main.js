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

// Images for desktop

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

// Images for pop up

let firstSlide = document.querySelector('.main-image-pop-up');

const mainImage = document.querySelector('.images-choose');
mainImage.addEventListener('click', showPopUpImage);

const popUp = document.querySelector('.image-carousel');
const closePopUp = document
  .querySelector('.close-image-pop-up')
  .addEventListener('click', closePopUpWhenClick);

function showPopUpImage() {
  // if (window.innerWidth < 1050) {
  //   popUp.style.display = 'none';
  //   background.style.display = 'none';
  // } else {
  popUp.style.display = 'block';
  background.style.display = 'block';
  // }
}

function closePopUpWhenClick() {
  popUp.style.display = 'none';
  background.style.display = 'none';
}

let firstClickPopUp = document.querySelector('.toggle-pop-up');

let secondClickPopUp;
let counterPopUp = 1;

const allMainImagesPopUps = document.querySelectorAll('.main-image-pop-up');
const firstMainImagePopUp = document.querySelector('.one');
const secondMainImagePopUp = document.querySelector('.two');

const thumbnailsPopUps = document.querySelectorAll('.thumbnail-pop-up');
thumbnailsPopUps.forEach((thumbnailPopUp) => {
  thumbnailPopUp.addEventListener('click', () => {
    counter++;
    if (counter % 2 === 0) {
      firstClickPopUp.classList.remove('toggle-pop-up', 'change-pop-up');
      secondClickPopUp = thumbnailPopUp;
      secondClickPopUp.classList.add('change-pop-up');
    } else {
      secondClickPopUp.classList.remove('change-pop-up');
      firstClickPopUp = thumbnailPopUp;
      firstClickPopUp.classList.add('change-pop-up');
    }

    allMainImagesPopUps.forEach((allMainImagePopUp) => {
      if (
        thumbnailPopUp.classList.contains('one') &&
        allMainImagePopUp.classList.contains('one')
      ) {
        allMainImagePopUp.classList.add('show');
      } else {
        allMainImagePopUp.classList.remove('show');
      }

      if (
        thumbnailPopUp.classList.contains('two') &&
        allMainImagePopUp.classList.contains('two')
      ) {
        allMainImagePopUp.classList.add('show');
      }

      if (
        thumbnailPopUp.classList.contains('three') &&
        allMainImagePopUp.classList.contains('three')
      ) {
        allMainImagePopUp.classList.add('show');
      }

      if (
        thumbnailPopUp.classList.contains('four') &&
        allMainImagePopUp.classList.contains('four')
      ) {
        allMainImagePopUp.classList.add('show');
      }
    });
  });
});

// Move to next/prev slide

const nextBtn = document
  .querySelector('.next-btn')
  .addEventListener('click', moveToNextSlide);
const prevBtn = document
  .querySelector('.prev-btn')
  .addEventListener('click', moveToPrevSlide);

let slidePosition = 0;
let slides = document.querySelectorAll('.main-image-pop-up');
const totalSlides = slides.length;

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('image-visible');
    if (slidePosition !== 0) {
      firstSlide.style.display = 'none';
    } else {
      firstSlide.style.display = 'block';
    }
  }

  slides[slidePosition].classList.add('image-visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}

// Cart

const cartWindow = document.querySelector('.check-out');

const cartIcon = document
  .querySelector('.cart-icon')
  .addEventListener('click', openCloseCartWindow);

function openCloseCartWindow() {
  counter++;
  if (counter % 2 === 0) {
    cartWindow.style.display = 'block';
  } else {
    cartWindow.style.display = 'none';
  }
}

// Counter items

let countItems = 0;

const counterItems = document.querySelector('.quantity');

const countUp = document
  .querySelector('.plus')
  .addEventListener('click', countUpItems);

const countDown = document
  .querySelector('.minus')
  .addEventListener('click', countDownItems);

function countUpItems() {
  countItems++;
  counterItems.innerHTML = countItems;
}

function countDownItems() {
  countItems--;
  if (countItems >= 0) {
    counterItems.innerHTML = countItems;
  } else countItems = 0;
}

// Add cart button
const itemsInCart = document.querySelector('.cart-number');

const addCart = document
  .querySelector('.add-cart')
  .addEventListener('click', addToCartBtn);

// Cart Window

const noItemsText = document.querySelector('.no-items');

const cartItems = document.querySelector('.cart-items');

const buttonCheckOut = document.querySelector('.button-checkout');

const textItems = document.querySelector('.text-items');

const total = document.querySelector('.total');

function addToCartBtn() {
  itemsInCart.innerHTML = counterItems.innerHTML;
  if (counterItems.innerHTML > 0) {
    itemsInCart.style.display = 'flex';
  } else {
    itemsInCart.style.display = 'none';
  }

  if (counterItems.innerHTML > 0) {
    cartItems.style.display = 'flex';
    buttonCheckOut.style.display = 'flex';
    noItemsText.style.display = 'none';
  } else {
    cartItems.style.display = 'none';
    buttonCheckOut.style.display = 'none';
    noItemsText.style.display = 'flex';
  }

  textItems.innerHTML = `$125.00 x ${counterItems.innerHTML}`;
  total.innerHTML = `$ ${125 * counterItems.innerHTML}.00`;
}

// Delete button

const deleteBtn = document
  .querySelector('.delete-button')
  .addEventListener('click', deleteItems);

function deleteItems() {
  counterItems.innerHTML = 0;
  countItems = 0;
  cartItems.style.display = 'none';
  buttonCheckOut.style.display = 'none';
  noItemsText.style.display = 'flex';
  itemsInCart.style.display = 'none';
}
