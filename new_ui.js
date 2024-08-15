let gp;
let leftPressed;
let rightPressed;
let aPressed;
let slideIndex = 1;
let currentSlideElement;
const links = [
  "Cats/mmo_Reimagined.html",
  "Cats/mmo2.html",
  "GeometryDash/Geometry Dash.html",
  "GeometryDash/Geometry Dash Meltdown.html",
  "GeometryDash/Geometry Dash Subzero.html",
  "GeometryDash/Geometry Dash World.html",
];

function openInNewTab(url) {
  window.open(url, "_blank").focus();
}

function tick() {
  if (navigator.getGamepads()[0]) {
    gp = navigator.getGamepads()[0];
    if (gp.buttons[4].pressed && !leftPressed) {
      plusSlides(-1);
      leftPressed = true;
    } else if (!gp.buttons[4].pressed && leftPressed) {
      leftPressed = false;
    }

    if (gp.buttons[5].pressed && !rightPressed) {
      plusSlides(1);
      rightPressed = true;
    } else if (!gp.buttons[5].pressed && rightPressed) {
      rightPressed = false;
    }

    if (gp.buttons[0].pressed && !aPressed) {
      openInNewTab(links[slideIndex - 1]);
      aPressed = true;
      console.log(slideIndex);
    } else if (!gp.buttons[0].pressed && aPressed) {
      aPressed = false;
    }
  }

  setTimeout(tick, 8);
}

tick();

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function getSlide(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  return slides[slideIndex - 1];
}
