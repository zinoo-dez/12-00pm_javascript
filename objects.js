const person = {
    fname: "john",
    lname: "smith",
    age: 22,
    hobby: ['soccer', 'gym', 'cycling'],
    marry: false,
    address: {
        city: "ygn",
        street: "27 street",
        township: "pabedan"
    },
    fullname: function () {
        // console.log(this);
        // return this.fname + ' '+ this.lname;
        return  `${this.fname}  ${this.lname}`
    }
}
person.email = "john@gmail.com";
// console.log(person.email);

// object destructuring {}
// const { fname, age, address: { city }, color = "red" } = person;

// console.log(color);
// console.log(age);
// console.log(fname);
// console.log(person.address.city);
// console.log(person);
//array of object
// const todos = [
//     {
//         id: 1,
//         job: "go to class",
//         isDone : true
//     },
//      {
//         id: 2,
//         job: "go to market",
//         isDone : true
//     },
//      {
//         id: 3,
//         job: "go to gym",
//         isDone : false
//      }
// ]
// const toJson = JSON.stringify(todos) /* to json */
// // console.log(toJson);
// const normal = JSON.parse(toJson) /* to object */
// console.log(normal);

// Math Object 
// console.log(Math);
// console.log(Math.random()); //random number 
// console.log((Math.random()*3) +1); //random number start 1
// console.log(Math.round(2.5)); // 3 closet number 
// console.log(Math.ceil( 2.2 )); // 3 top number 
// console.log(Math.floor(2.9)); // 2 bottom number 
// console.log(Math.abs(- 2.9)); // 2 positive number 
// console.log(Math.abs( -2.1)); // 2 positive number 
// console.log(Math.trunc( 2.1)); // 2 drop decimal point
// console.log(Math.trunc( -2.1)); // 2 drop decimal point
// console.log(Math.pow( 2,3 )); // power
// console.log(Math.sqrt( 4,4)); // square root
// console.log(Math.max( 4,4,5,6,78,90,33,4,5,100,100.1)); // max value 
// console.log(Math.min(0,-2,-9,-9.2,-9.9, 4,4,5,6,78,90,33,4,5,100,100.1)); 
// console.log(Math.floor(6 * (Math.random())) + 1);
const dice = {
    sides: 6,
    roll() {
        i = 0;
        let a = [];
        let b = [];
        while (i < 1000) {
            //dice start 1
            let res = Math.floor(this.sides * (Math.random())) + 1;
            if (res <= 3) {
                a.push(res)
            } else {
                b.push(res)               
            }
            i++;
        }
        // console.log("a result is =>" + a);
        // console.log("<==>");
        // console.log("b result is => " + b);
        console.log(`a win ${a.length}`);
        console.log(`b win ${b.length}`);
        let winner = (a.length > b.length) ? "a winner" : "b winner";
        console.log(winner);
        // console.log(` ${d.length} draw`);
    },
}
dice.roll();