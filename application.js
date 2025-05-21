document.querySelector(".burger").addEventListener("click", function () {
    const nav = document.querySelector("nav");
    const isActive = nav.classList.contains("active");
    if (isActive) {
      nav.classList.remove("active");
    } else {
      nav.classList.add("active");
    }
  
  });
  
  document.querySelector(".burger").addEventListener("click", (event) => {
    console.log("Burger clicked", event);
  });

  const validateName = () => {
  const inputName = document.querySelector("#name");
  const nameError = document.querySelector("#name-error");
  if (inputName.value.length < 2) {
    nameError.classList.remove("hidden");
    return false;
  } else {
    nameError.classList.add("hidden");
    return true;
  }
};
const inputName = document.querySelector("#name");
inputName.addEventListener("blur", validateName);

const validateEmail = () => {
  const emailError = document.querySelector("#email-error");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(inputEmail.value)) {
    emailError.classList.remove("hidden");
    return false;
  } else {
    emailError.classList.add("hidden");
    return true;
  }
};
const inputEmail = document.querySelector("#email");
inputEmail.addEventListener("blur", validateEmail)

const validateMessage = () => {
  const messageError = document.querySelector("#message-error");
  if (inputMessage.value.length < 10) {
    messageError.classList.remove("hidden");
    return false;
  } else {
    messageError.classList.add("hidden");
    return true;
  }
};
const inputMessage = document.querySelector("#message");
inputMessage.addEventListener("blur", validateMessage);

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", (event) => {
  if ((validateEmail() == true) && validateMessage() == true && validateName() == true) {
    console.log("Form submitted");
  } else {
    console.log("Not submited");
    event.preventDefault();
  }
  validateName();
  validateEmail();
  validateMessage();
});