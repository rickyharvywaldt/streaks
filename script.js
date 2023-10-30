let i = 0;

while (i < 364) {
  const para = document.createElement("div");

  para.classList.add("mystyle");

  const element = document.getElementById("wrapper");
  element.appendChild(para);
  i++;
}
