let megaMenu = document.getElementById("mega-menu");
let menuBool = true;
// MegaMenu Presence on click
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
// Return to top function
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
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Change card color when click on it
function toggleBackgroundColor(element) {
  if (element.style.backgroundColor === "") {
    element.style.backgroundColor = "#aad4e2";
  } else {
    element.style.backgroundColor = "";
  }
}
// Timer For Event
function startTimer(duration, display) {
  var timer = duration;
  setInterval(function () {
    display.textContent = timer;
    if (--timer <= 0) {
      clearInterval(interval);
    }
  }, 1000);
}

window.onload = function () {
  var duration = 1600; // Set the duration in seconds
  var display = document.getElementById("timer");
  startTimer(duration, display);
};

// Submit Button on payments page
function submitBtn() {
  let inputs = document.getElementsByTagName("input");
  let button = document.getElementById("btn-submit");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      alert("Please Fill All The Fields");
      event.preventDefault();
      return;
    }
  }
  displayMessage();
}
// Continue Button on Main Page
function continueBtn() {
  let inputs = document.getElementsByTagName("input");
  let button = document.getElementById("confirm-donation");
  let email = document.getElementById("email");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      alert("Please Fill All The Fields || put correct email");
      event.preventDefault();
      return;
    }
  }
  goToAnotherPage();
}
// Go To Payments page upon clicking continue
function goToAnotherPage() {
  window.location.href = "/payments.html";
}
// Display Successful message up clicking submit on payment page
function displayMessage() {
  let message = document.querySelector(".finish .container");
  let paymentPage = document.getElementById("payments");
  let visa = document.getElementsByClassName("visa")[0];
  message.style.zIndex = 99;
  message.style.display = "flex";
  paymentPage.style.opacity = 0;
  visa.style.opacity = 0;
  event.preventDefault();
}
// Change number on visa upon changing it in the input
function changeNumber() {
  let number = document.getElementById("card-number");
  let inputNumber = document.getElementsByName("input-number")[0].value;
  number.innerHTML = inputNumber;
}
// Change holder on visa upon changing it in the input
function changeHolder() {
  let holder = document.getElementById("card-holder");
  let inputHolder = document.getElementsByName("input-holder")[0].value;
  holder.innerHTML = inputHolder;
}
// Change CVV on visa upon changing it in the input
function changeCVV() {
  let cvv = document.getElementById("cvv");
  let inputCvv = document.getElementsByName("input-cvv")[0].value;
  cvv.innerHTML = inputCvv;
}
