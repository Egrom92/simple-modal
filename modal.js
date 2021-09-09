const modal = document.querySelectorAll(".modal");
const trigger = document.querySelectorAll(".trigger");
const closeButton = document.querySelectorAll(".close-button");

function toggleModal(i) {
  modal[i].classList.toggle("show-modal");
}

function windowOnClick(event) {
  modal.forEach((el, i) => {
    if (event.target === el) {
      toggleModal(i);
    }
  })

}

trigger.forEach((el, i) =>{
  el.addEventListener("click", () => {
    toggleModal(i)
  });
})
closeButton.forEach((el, i) =>{
  el.addEventListener("click", () => {
    toggleModal(i)
  });
})

window.addEventListener("click", windowOnClick);
