"use strict";

const btnContainer = document.getElementById("buttons-container");

btnContainer.addEventListener("click", function (event) {
  const btn1 = document.getElementById("buttonOne");
  const btn2 = document.getElementById("buttonTwo");
  const btn3 = document.getElementById("buttonThree");
  let btnTitle = null;
  if (event.target === btn1) {
    btnTitle = buttonOne.textContent;
  } else if (event.target === btn2) {
    btnTitle = buttonTwo.textContent;
  } else if (event.target === btn3) {
    btnTitle = buttonThree.textContent;
  } else {
    return;
  }

  const modalContainer = document.querySelector(".modal-container");
  const text = document.querySelector(".body");
  text.textContent = "You clicked this button: " + btnTitle;
  modalContainer.style.display = "";
  modalContainer.querySelector(".footer button").onclick = () => {
    modalContainer.style.display = "none";
  };
  modalContainer.onclick = (event) => {
    if (event.target.classList.contains("modal-container")) {
      modalContainer.style.display = "none";
    }
  };
});
