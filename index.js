const circle1 = document.querySelector(".circle-1");
const circle2 = document.querySelector(".circle-2");
const dollarBox = document.querySelector(".dollar-box");
const topPart = document.querySelector(".top");
const shoe = document.querySelector(".shoe");
const numbers = document.querySelector(".numbers");
const circles = numbers.children;

circle1.addEventListener("click", () => {
  circle1.style.outline = "5px solid rgba(0,0,0,.25)";
  circle2.style.outline = "none";
  dollarBox.classList.add("blue");
  topPart.classList.add("blue");
  dollarBox.classList.remove("red");
  topPart.classList.remove("red");
  shoe.src = "images/shoe1.png";
  shoe.style.transform = "rotate(-5deg)";
  shoe.style.top = "-10%";
  shoe.style.right = "-45%";
});

circle2.addEventListener("click", () => {
  circle2.style.outline = "5px solid rgba(0,0,0,.25)";
  circle1.style.outline = "none";
  dollarBox.classList.add("red");
  topPart.classList.add("red");
  dollarBox.classList.remove("blue");
  topPart.classList.remove("blue");
  shoe.src = "images/shoe2.png";
  shoe.style.transform = "rotate(-45deg)";
  shoe.style.top = "-25%";
  shoe.style.right = "-25%";
});

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
