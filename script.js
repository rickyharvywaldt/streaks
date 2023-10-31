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

const dateTxt = `0 activity on ${month} ${d}${nthNumber(d)}`;
console.log(dateTxt);

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
