const span = document.querySelector("span");
const usd = document.querySelector(".usd");
const mmk = document.querySelector(".mmk");
let i = 0;
let stock = 20;
let item_price = 20;
let usd_rate = 1980;
function add() {
  if (i == 20) return false;
  i++;
  span.innerHTML = i;
  usd.innerHTML = usd_d(item_price * i);
  mmk.innerHTML = mmk_k(item_price * i, usd_rate);
}
function sub() {
  if (i == 0) return false;
  i--;
  span.innerHTML = i;
  usd.innerHTML = usd_d(item_price * i);
  mmk.innerHTML = mmk_k(item_price * i, usd_rate);
}

function usd_d(val) {
  return val + " $";
}
function mmk_k(val, rate) {
  return val * rate + " Ks";
}
