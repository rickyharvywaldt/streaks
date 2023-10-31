const btn = document.querySelector(".btn");
let c = 0;

const month = new Date().toLocaleString("default", { month: "long" });
const d = new Date().toString().slice(8, 10);
const nthNumber = (number) => {
  if (number > 3 && number < 21) return "th";
  switch (number % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};
const dateTxt = `${c} activity on ${month} ${d}${nthNumber(d)}`;
console.log(dateTxt);

const createDiv = () => {
  let i = 0;

  while (i < 371) {
    const para = document.createElement("div");
    const tooltip = document.createElement("span");
    const tooltipText = document.createTextNode(dateTxt);
    tooltip.appendChild(tooltipText);

    para.classList.add("mystyle");
    tooltip.classList.add("tooltip-text");

    const element = document.getElementById("wrapper");
    element.appendChild(para);
    para.appendChild(tooltip);
    i++;
  }
};

document.addEventListener("DOMContentLoaded", createDiv);

const colors = {
  a: "#bbf7d0",
  b: "#86efac",
  c: "#4ade80",
  d: "#22c55e",
};

btn.addEventListener("click", () => {
  c++;
  const dateTxt =
    c <= 1
      ? `${c} activity on ${month} ${d}${nthNumber(d)}`
      : `${c} activities on ${month} ${d}${nthNumber(d)}`;
  const tooltips = document.querySelectorAll(".tooltip-text");
  tooltips.forEach((tooltip) => {
    tooltip.textContent = dateTxt;
  });
  const days = document.querySelectorAll(".mystyle:not(:nth-child(n + 364))");
  days.forEach((day) => {
    if (c < 5) {
      day.style.backgroundColor = colors.a;
    }
    if (c >= 5 && c < 10) {
      day.style.backgroundColor = colors.b;
    }
    if (c >= 10 && c < 15) {
      day.style.backgroundColor = colors.c;
    }
    if (c >= 15) {
      day.style.backgroundColor = colors.d;
    }
  });

  console.log(dateTxt);
});
