const todos = [
  {
    id: 1,
    job: "go to class",
    isDone: true,
  },
  {
    id: 2,
    job: "go to market",
    isDone: true,
  },
  {
    id: 3,
    job: "go to gym",
    isDone: false,
  },
];

const job = todos.map((todo) => {
  return todo.job;
});
console.log(job);

// todos.forEach( (res) =>{
//     console.log(res.id);
// })

// todos.forEach(todo => {
//     console.log(todo.job);
// });
// for (const todo of todos) {
//     console.log(todo.job);
// }

// for (let i = 0; i < todos.length; i++) {
//     const element = todos[i].job;
//     console.log(element);
// }
// for (const key in todos) {
//     const element = todos[key].isDone;
//     console.log(element);
// }

//arary return loop
// foreach,map,filter , reduce

// const done = todos.filter((todo) => {
//     return todo.isDone === true;
// })
// console.log(done);

// const done2 = todos.filter((todo) => {
//     return todo.isDone === true;
// }).map((todo) => {
//     return todo.job
// })
// console.log(done2);

// const app = [22, 43, 45, 66, 77, 88, 22, 44];
// const ans = app.reduce((a, n) => {
//     return a + n;
// })
// console.log(ans);
