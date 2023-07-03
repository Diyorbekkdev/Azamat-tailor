const openModal = document.querySelector(".add-order-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const modalCloseBtn = document.querySelector("#close");
const closeYangi = document.querySelector("#closeYangi");
const openYangi = document.querySelector(".new-customer-modal");
const orderModal = document.querySelector(".add-order-modal");

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


function openYangiModal(){
  openYangi.classList.add('yangiActive');
  orderModal.style.transform = "scale(.9)"
}

function closeYangiModal(){
  openYangi.classList.remove("yangiActive");
  orderModal.style.transform = "scale(1)";
}

// =======AUTOCOMPLETE=======//
