const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function firstpage() {
  //button click class
  sectBtn.forEach((element) => {
    element.addEventListener("click", () => {
      const current = document.getElementsByClassName("active-btn");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active-btn", "");
      }
      element.className += " active-btn";
    });
  });
}

firstpage();
