const form = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const message = document.querySelector("#message");
const inputs = document.querySelectorAll(".form-control input");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  checkValidInputs();
});

function checkValidInputs() {
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      input.parentElement.nextElementSibling.style.display = "flex";
    } else {
      input.parentElement.nextElementSibling.style.display = "none";
      input.value = "";
      message.value = "";
    }
  });
}
