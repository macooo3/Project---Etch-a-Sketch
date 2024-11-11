"strict";
const container = document.querySelector(".grid-container");

const numGridRows = function (num) {
  for (let i = 0; i < num - 1; i++) {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="grid-row gridrow-${i}"></div>`
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
          `<div class="grid grid-${j}"></div>`
        );
      }
    });
  };

numGridRows(10);
boxes(10);
