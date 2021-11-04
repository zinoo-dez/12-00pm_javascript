// const btn = document.querySelectorAll("button");
// const body = document.querySelector("body");
// // console.log(btn);
// btn.forEach((b) => {
//   b.onclick = function (event) {
//     console.log(event.target);
//     console.log(this.innerHTML);
//     body.style.background = event.target.innerHTML;
//     body.style.background = this.innerHTML;
//   };
// });

const h2 = document.querySelector("h2");
const input = document.querySelector("#input");

input.addEventListener("keyup", function () {
  //   console.log(this);
  h2.innerHTML = this.value;
});

input.addEventListener("change", function () {
  //   console.log(this);
  h2.innerHTML = this.value;
  this.value = "";
});
