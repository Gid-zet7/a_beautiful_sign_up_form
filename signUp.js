const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");
const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");
const repeat = document.getElementById("repeat");
const repeatError = document.querySelector("#repeat + span.error");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

password.addEventListener("input", (event) => {
  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
  } else {
    showError();
  }
});

repeat.addEventListener("input", (event) => {
  if (repeat.validity.valid) {
    repeatError.textContent = "";
    repeatError.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (
    !email.validity.valid ||
    !password.validity.valid ||
    repeat.value !== password.value
  ) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Please enter an email address.";
    emailError.className = "error active";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
    emailError.className = "error active";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    emailError.className = "error active";
  } else if (password.validity.valueMissing) {
    passwordError.textContent = "Please enter a password";
    passwordError.className = "error active";
  } else if (password.validity.tooShort) {
    passwordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
    passwordError.className = "error active";
  } else if (repeat.value !== password.value) {
    repeatError.textContent = "Passwords do not match";
    repeatError.className = "error active";
  }
}
