const circle1 = document.querySelector(".circle-1");
const circle2 = document.querySelector(".circle-2");
const dollarBox = document.querySelector(".dollar-box");
const topPart = document.querySelector(".top");
const shoe1 = document.querySelector(".shoe-1");
const shoe2 = document.querySelector(".shoe-2");
const numbers = document.querySelector(".numbers");
const circles = numbers.children;

circle1.addEventListener("click", () => {
  applyOutlines("blue");
  applyColors("blue");
  applyAnimations("blue");
});

circle2.addEventListener("click", () => {
  applyOutlines("red");
  applyColors("red");
  applyAnimations("red");
});

function applyAnimations(color) {
  if (color === "blue") {
    shoe1.style.animationName = "shoe1-appear";
    shoe2.style.animationName = "shoe2-vanish";
  }
  if (color === "red") {
    shoe1.style.animationName = "shoe1-vanish";
    shoe2.style.animationName = "shoe2-appear";
  }
}

function applyColors(color) {
  if (color === "blue") {
    dollarBox.classList.add("blue");
    topPart.classList.add("blue");
    dollarBox.classList.remove("red");
    topPart.classList.remove("red");
  }
  if (color === "red") {
    dollarBox.classList.add("red");
    topPart.classList.add("red");
    dollarBox.classList.remove("blue");
    topPart.classList.remove("blue");
  }
}

function applyOutlines(color) {
  if (color === "blue") {
    circle1.style.outline = "5px solid rgba(0,0,0,.25)";
    circle2.style.outline = "none";
  }
  if (color === "red") {
    circle2.style.outline = "5px solid rgba(0,0,0,.25)";
    circle1.style.outline = "none";
  }
}

// APPLY CLICK EVENT LISTENER TO CIRCLES
for (let i = 0; i < circles.length; i++) {
  let curr = circles[i];
  curr.addEventListener("click", (e) => {
    clearCircles();
    e.target.style.backgroundColor = "rgb(0, 182, 118)";
    e.target.style.color = "white";
  });
}

function clearCircles() {
  for (let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = "transparent";
    circles[i].style.color = "rgb(39, 39, 39)";
  }
}
