const triggerPassword = document.querySelector(".fa-eye");
const form = document.querySelector(".form");
let userInfo = {};
const formElement = form.elements;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  userInfo = {
    userName: formElement.userName.value,
    password: formElement.userName.value,
  };
  console.log(userInfo);
  form.reset();
});

const showPassword = (trigger) => {
  trigger.addEventListener("click", () => {
    if (trigger.previousElementSibling.getAttribute("type") === "password") {
      trigger.previousElementSibling.setAttribute("type", "text");
      trigger.classList.remove("fa-eye");
      trigger.classList.add("fa-eye-slash");
    } else if (trigger.previousElementSibling.getAttribute("type") === "text") {
      trigger.previousElementSibling.setAttribute("type", "password");
      trigger.classList.remove("fa-eye-slash");
      trigger.classList.add("fa-eye");
    }
  });
};

showPassword(triggerPassword);
