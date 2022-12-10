const form = document.querySelector(".sign-up__form");
const passwordInputs = document.querySelectorAll("input[type='password']");
const errorMessage = document.querySelector(".error-message");

const checkPasswords = () => {
  const password = passwordInputs[0].value;
  const repPassword = passwordInputs[1].value;

  return password === repPassword;
};

const showError = () => {
  passwordInputs.forEach((input) => input.classList.add("error"));
  errorMessage.classList.add("display");
};

form.addEventListener("submit", (e) => {
  if (!checkPasswords()) {
    e.preventDefault();
    showError();
  }
});
