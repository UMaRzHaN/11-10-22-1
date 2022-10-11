const container = document.querySelector(".container");
const input = document.querySelector("input");
const btn = document.querySelector("button");
let b = 1;
btn.addEventListener("click", () => {
  let i = false;
  const newEl = document.createElement("li");
  newEl.className = "card";
  newEl.innerText = input.value;
  container.append(newEl);
  console.log(typeof newEl);

  newEl.addEventListener("click", () => {
    if (i) {
      newEl.style = " text-decoration: none";
      i = false;
    } else {
      newEl.style = " text-decoration: line-through;";
      i = true;
    }
  });
});
