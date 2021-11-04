const a = 10;
const b = 20;
const c = "20";

// if( a != 11){
//     console.log('true');
// }
// let bar = !!true;
// console.log(bar);
// if( c === b){
//     console.log("true");
// }else{
//     console.log("false");
// }
// if (a === 10 && b < 16) {
//     console.log("true");
// } else {
//     console.log("false");
// }
// if (a === 10 || b < 16) {
//     console.log("true");
// } else {
//     console.log("false");
// }
// const age = 20;
// const name = age > 20 ? "john" : "rose";
// console.log(name);

// const a = "20";
// if (a === 10) {
//     console.log("a is "+a);
// } else if (a === 20) {
//     console.log("a is " +a);
// } else {
//     console.log("a is null");
// }

// console.log(new Date);
let date1 = new Date().toLocaleString();
let date2 = new Date().toLocaleTimeString();
let date3 = new Date().toLocaleDateString();
// console.log(date1)
// console.log(date2)
// console.log(date3)
// const d = new Date().getDay();
// switch (d) {
//     case 0:
//         console.log('sunday');    
//         break;
//     case 1:
//     console.log('monday');    
//         break;
//     case 2:
//     console.log('tuesday');    
//         break;
//     case 3:
//     console.log('wednesday');    
//         break;
//     case 4:
//     console.log('thursday');    
//         break;
//     case 5:
//     console.log('friday');    
//         break;
//     case 6:
//     console.log('saturaday');    
//     break;
//     default:
//         console.log("something wrong");
//         break;
// }

// for (let i = 0; i <= 100; i++) {
//     const element = `the loop answer is ${i}`;
//     console.log(element);    
// }


// let i = 10;

// let i = 0;
// while (i < 3) {
//     console.log(`the loop ans is ${i}`);
//     i++;
// }

// let i = 4
// do {
//     console.log(`the loop ans is ${i}`);
//         i++;
// } while (i < 3);
// break
for (var i = 1; i < 10; i++) {
    if (i == 5) {
        continue;
        // break;
    }
    console.log(i)
}
// console.log(i); // 3