let i = 0;

while (i < 364) {
  const para = document.createElement("div");
  const tooltip = document.createElement("span");
  const tooltipText = document.createTextNode("No activity on February 14th.");
  tooltip.appendChild(tooltipText);

  para.classList.add("mystyle");
  tooltip.classList.add("tooltip-text");

  const element = document.getElementById("wrapper");
  element.appendChild(para);
  para.appendChild(tooltip);
  i++;
}
