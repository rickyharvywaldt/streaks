let c = 0;

const createDiv = () => {
  let i = 0;
  const startDate = new Date(2024, 0, 1); // January is 0 in JavaScript Date

  while (i < 366) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    const month = currentDate.toLocaleString("default", { month: "long" });
    const d = currentDate.getDate();
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

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  c++;
  updateDivs();
});

function updateDivs() {
  const divs = document.querySelectorAll(".mystyle");
  divs.forEach((div) => {
    const tooltip = div.querySelector("span");
    const dateText = tooltip.textContent;
    const dateParts = dateText.split(" ");
    const month = dateParts[3];
    const d = parseInt(dateParts[4].slice(0, -2));
    const currentNthNumber = nthNumber(d);
    const updatedDateTxt =
      c <= 1
        ? `${c} activity on ${month} ${d}${currentNthNumber}`
        : `${c} activities on ${month} ${d}${currentNthNumber}`;
    tooltip.textContent = updatedDateTxt;

    if (c < 5) {
      div.style.backgroundColor = colors.a;
    } else if (c >= 5 && c < 10) {
      div.style.backgroundColor = colors.b;
    } else if (c >= 10 && c < 15) {
      div.style.backgroundColor = colors.c;
    } else {
      div.style.backgroundColor = colors.d;
    }
  });
}

function nthNumber(number) {
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
}
