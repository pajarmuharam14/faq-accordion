const iconPlusBtn = document.querySelectorAll(".icon-plus");
const answers = document.querySelectorAll(".answer");

for (let i = 0; i < iconPlusBtn.length; i++) {
  iconPlusBtn[i].addEventListener("click", () => {
    if (answers[i].classList.contains("active")) {
      iconPlusBtn[i].setAttribute("src", "./assets/images/icon-plus.svg");
      answers[i].classList.remove("active");
    } else {
      iconPlusBtn[i].setAttribute("src", "./assets/images/icon-minus.svg");
      answers[i].classList.add("active");
    }
  });
}
