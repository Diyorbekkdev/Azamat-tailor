const openModal = document.querySelector(".add-order-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const modalCloseBtn = document.querySelector(".close");
const click = document.getElementById("click");
const clickModal = document.querySelector(".clickModal");
const exitModal = document.querySelector(".exit");
/*<!-- ======================================================== -->*/
function clickActive() {
  click.addEventListener("click", function () {
    clickModal.classList.add("clickModalActive");
  });
}
function clickOff() {
  exitModal.addEventListener("click", function () {
    clickModal.classList.remove("clickModalActive");
  });
}
function escOff() {
  document.addEventListener("keydown", function () {
    clickModal.classList.remove("clickModalActive");
  });
}
window.addEventListener("click", function (e) {
  if (e.target == exitModal || e.target == clickModal) {
    clickModal.classList.remove("clickModalActive");
  }
});
clickActive();
clickOff();
escOff();
/*<!-- ======================================================== -->*/

openModal.addEventListener("click", modalActive);

function modalActive() {
  modalOverlay.classList.add("modal-active");
}

function remove() {
  modalOverlay.classList.remove("modal-active");
}

window.addEventListener("click", function (e) {
  if (e.target == modalOverlay || e.target == modalCloseBtn) {
    remove();
  }
});

let choices = [
  "Diyorbek",
  "Nodirbek",
  "Javlon",
  "Durbek",
  "What does CSS stands for",
  "Facebook login",
  "Login box with HTML & CSS",
  "Who is a Freelancer",
  "How to create an Instagram page",
  "What is a text generator",
  "Who is Lorem Ipsum",
  "Backend developer",
  "Learn to be a backend developer",
  "Frontend developer",
  "Web designer",
  "Javlon",
];
let $ = document;
let list_group = $.querySelector(".customer_list");

function ListItemGenerator() {
  if (!inputTxt.value) {
    inputTxt.parentElement.classList.remove("active");
    list_group.style.display = "none";
  } else {
    inputTxt.parentElement.classList.add("active");
    list_group.style.display = "block";

    let SearchResults = choices.filter(function (choice) {
      return choice.toLowerCase().startsWith(inputTxt.value.toLowerCase());
    });

    CreatingList(SearchResults);

    function CreatingList(Words) {
      let createdList = Words.map(function (word) {
        return "<li>" + word + "</li>";
      });
      let CustomListItem;
      if (!CreatingList.length) {
        CustomListItem = "<li>" + inputTxt.value + "</li>";
      } else {
        CustomListItem = createdList.join("");
      }
      list_group.innerHTML = CustomListItem;
      CompleteText();
    }
  }

  function CompleteText() {
    all_list_items = list_group.querySelectorAll("li");
    all_list_items.forEach(function (list) {
      list.addEventListener("click", function (e) {
        inputTxt.value = e.target.textContent;
        list_group.style.display = "none";
      });
    });
  }
}

inputTxt.addEventListener("keyup", ListItemGenerator);
