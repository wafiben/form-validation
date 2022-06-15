const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const buttonShow = document.querySelector(".show");

const errorNameLenght = "your name should be at least 5 character";
const errorPhoneNumber = "your phone should be at least 8 character";
const errorPassword = "your password be at least 6 character";

function handleErrorLenght(fieald, fieldLength, errorMsg) {
  fieald.addEventListener("change", function () {
    if (fieald.value.length < fieldLength) {
      alert(errorMsg);
    }
  });
}

handleErrorLenght(userName, 5, errorNameLenght);
handleErrorLenght(phone, 8, errorPhoneNumber);
handleErrorLenght(password, 6, errorPassword);

buttonShow.addEventListener("click", function (event) {
  event.preventDefault();
  buttonShow.style.outline = "none";
  if (password.type === "password") {
    password.type = "text";
    buttonShow.innerHTML = "hide password";
  } else {
    password.type = "password";
    buttonShow.innerHTML = "show password";
  }
});
