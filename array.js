// const a = new Array(1,2,3,4,5,6,67)
// const c  = true;
// const b = [2,3,4,true,false,NaN,null,"bobo","aung aung"];
// console.log(b.indexOf("bobo"));
// console.log(Array.isArray(b));
// console.log(Array.isArray(c));
// console.log(b.splice(0, 3));
// console.log(b);
// b.push("abc");
// b.unshift("apple");
// b.pop();
// b.shift();
// console.log(b);
// a[20] = "sport"
// console.log(a);
// console.log(a[0]);
// a[0] = "games"
// console.log(a[0]);
// console.log(a[4]);


// array destructure
// ... spread opreator
// const number = [1, 2, 3, 4, 5, 6]
// const [a, b, ...c] = number;
// console.log(a);
// console.log(b);
// console.log(c);

// const arr = ["aaa","banana","pine-apple","water-melon"];
// const aa = arr.join(" - ");
// console.log(aa);
// console.log(typeof aa);
// const app1 = [22, 33, 44];
// console.log(app1.includes(33));
// const app2 = ["aa", "bb", "cc"];
// const app3 = [app1,app2];
// const app4 = [...app1, ...app2];
// console.log(app3);
// console.log(app4);
// const b = "mgmg@gmail.com"
// console.log(b.includes('com'));
let name = 'john\'ssmith';
const arr = [
    ["apple","banana","mango","orange",["aa","bb","v"]],
    ["mgmg","aungaung" ,[33,4,5,"ee",['aa','vv','bb','nn'],6,7,8,9,11],"mama","koko"],
    [22,33,55,66],
]
console.log(arr[1][2][4][0]);