// const ul = document.querySelector("ul");
// console.log(ul.childNodes);
// console.log(ul.children);
// console.log(ul.children.length);
// console.log(ul.nextSibling); //#text
// console.log(ul.nextElementSibling);
// console.log(ul.previousElementSibling);
// console.log(ul.firstElementChild);
// console.log(ul.firstChild);
// console.log(ul.lastElementChild);
// console.log(ul.parentElement);

// console.log(this);
// console.log(window);
// console.log(document);
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.body.children);
/** 
const btn = document.querySelector("#btn");
function change() {
  //check condition (===)
  if (h2.innerHTML === "hello JS") {
    //assign value(=)
    h2.innerHTML = "Hello HTML";
  } else {
    h2.innerHTML = "hello JS";
  }
}

const h2 = document.querySelector("h2");
const r = document.querySelector("#red");
const b = document.querySelector("#blue");
const body = document.querySelector("body");
function red() {
  body.style.background = "white";
  h2.style.color = "#000";
}
function blue() {
  body.style.background = "black";
  h2.style.color = "#fff";
}
r.onclick = red;
b.onclick = blue;
// btn.onclick = change;
// btn.addEventListener("click", change);
*/

const colors = [
  "orange",
  "#663399",
  "yellow",
  "red",
  "black",
  "green",
  "grey",
  "skyblue",
];
const btn = document.querySelector("button");
function change() {
  let e = (document.querySelector("body").style.background =
    colors[Math.floor(colors.length * Math.random())]);
  console.log(e);
}

btn.addEventListener("click", change);
