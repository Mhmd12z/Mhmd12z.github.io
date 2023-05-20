let megaMenu = document.getElementById("mega-menu");
let menuBool = true;
function present() {
  if (menuBool == true) {
    megaMenu.style.opacity = 1;
    megaMenu.style.zIndex = 1;
    megaMenu.style.top = "80%";
    menuBool = false;
  } else {
    megaMenu.style.opacity = 0;
    megaMenu.style.zIndex = -1;
    menuBool = true;
  }
}
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (
    document.body.scrollTop > window.innerHeight / 2 ||
    document.documentElement.scrollTop > window.innerHeight / 2
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Function to scroll to the top when the button is clicked
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// let cardHover=document.querySelector(".card");
// let cardActive = true;
// function freeze(){
//   if (cardActive == true) {
//     cardHover.style.backgroundColor="#aad4e2";
//     cardHover.style.color="#01265a";
//     cardActive = false;
//   } else {
//     cardHover.style.backgroundColor="#01265a";
//     cardHover.style.color="white";
//     cardActive = true;
//   }
// }

function toggleBackgroundColor(element) {
  if (element.style.backgroundColor === "") {
    element.style.backgroundColor = "#aad4e2";
  } else {
    element.style.backgroundColor = "";
  }
}
function startTimer(duration, display) {
  var timer = duration,
    hours,
    minutes,
    seconds;
  setInterval(function () {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hours + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  var duration = 23600;
  var display = document.getElementById("timer");
  startTimer(duration, display);
};
