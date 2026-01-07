const previousButton = document.getElementById("previous-page");
const nextButton = document.getElementById("next-page");
const tckBody = document.querySelector(".tck__body");
const ldbRows = document.querySelectorAll(".ldb__row");

const rowWidth = ldbRows[0].offsetWidth;
const scrollAmount = rowWidth + parseInt(getComputedStyle(ldbRows[0]).getPropertyValue("margin-right"));

previousButton.addEventListener("click", () => {
  tckBody.scrollBy({
    left: -scrollAmount
  });
});

nextButton.addEventListener("click", () => {
  tckBody.scrollBy({
    left: scrollAmount
  });
});