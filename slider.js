const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const button = document.querySelectorAll(".button");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;
let length = images.length;
console.log(length);

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
  buttons.forEach((button, i) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 800}px)`;
    slideNumber = i + 1;
    button.style.backgroundColor = "white";
  });
});

right.addEventListener("click", () => {
  if (slideNumber < length) {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
  } else {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
  }
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "white";
});
left.addEventListener("click", () => {
  if (slideNumber > 1) {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
    slideNumber--;
  } else {
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
    slideNumber = length;
  }
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "white";
});
