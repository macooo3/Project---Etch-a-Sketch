"strict";
const container = document.querySelector(".grid-container");
const btn = document.querySelector(".enter-value-btn");
const value = document.querySelector(".value");
const para = document.querySelector('.p')

const changeGrid = function () {
  const gridValue = +value.value;
  if (gridValue > 2 && gridValue <= 100) {
    container.innerHTML = "";
    numGridRows(gridValue);
    boxes(gridValue);
    para.innerText = ''
  } else {
   para.innerText = 'please choose again'
  }
};
btn.addEventListener("click", changeGrid);

const numGridRows = function (num) {
  for (let i = 0; i < num; i++) {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="grid-row gridrow-${i + 1}"></div>`
    );
  }
};

const boxes = function (num) {
  // Get all grid-row elements after they're created
  const gridRows = document.querySelectorAll(".grid-row");

  // Loop through each grid-row and add boxes inside it
  gridRows.forEach((row) => {
    for (let j = 0; j < num; j++) {
      row.insertAdjacentHTML(
        "beforeend",
        `<div class="grid grid-${j + 1} color"></div>`
      );
    }
  });
};


const hover = function (mouse) {
  if (mouse.target.classList.contains("grid")) {
    const gridElement = mouse.target.closest(".grid"); // closest() checks ancestors for the class

    if (gridElement) {
      gridElement.classList.add("color-black");
    }
  }
};
container.addEventListener("mouseover", hover);
