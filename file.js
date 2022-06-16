const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const buttonShow = document.querySelector(".show");

const errorNameLenght = "your name should be at least 5 character";
const errorPhoneNumber = "your phone should be at least 8 character";
const errorPassword = "your password be at least 6 character";

const errorFormatPhone = "phone number invalid";
const errorEmailFormat = "email invalid";
const phoneRegex = new RegExp(/^\d+$/);
const EmailRegEx = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

function HandleErrorFormat(fieald, rejex, errorMsg) {
  fieald.addEventListener("change", function () {
    if (!rejex.test(fieald.value)) {
      alert(errorMsg);
    }
  });
}
HandleErrorFormat(phone, phoneRegex, errorFormatPhone);
HandleErrorFormat(email, EmailRegEx, errorEmailFormat);

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




