const infoBtn = document.getElementById("infoBtn");
const infoSection = document.getElementById("infoSection");
const newGameBtn = document.getElementById("newGameBtn");
const newGame = document.getElementById("newGame");
const xBtns = document.querySelectorAll(".xBtn");

function display(button, section) {
  button.addEventListener("click", () => {
    section.style.display = "flex";
  });
}
display(infoBtn, infoSection);
display(newGameBtn, newGame);

xBtns.forEach((xBtn) => {
  xBtn.addEventListener("click", () => {
    if (infoSection.style.display === "flex") {
      infoSection.style.display = "none";
    } else if (newGame.style.display === "flex") {
      newGame.style.display = "none";
    }
  });
});

const newGameBtn1 = document.getElementById("newGameBtn1");
const input = document.getElementById("name");
const error = document.getElementById("error");

newGameBtn1.addEventListener("click", () => {
  if (input.value === "") {
    error.style.display = "block";
    error.innerHTML = "Please enter your name";
    error.style.color = "red";
  } else {
    error.style.display = "none";
    window.location.href = "gamePage.html";
  }
});
