// // ex01: output your name
// console.log("Mad Kode");

// // ex02: read the name of your user
// let username = prompt('Please enter your name: ');

// // ex03: welcome your user
// if (username != null) {
//     console.log(`Welcome ${username}`);
// }

// //  ex04: do it all together
// let username = prompt('Enter your name:');
// console.log("Welcome " + username);

// // ex05: print right/wrong if greater than 25
// let age = prompt('Are you older than 25? ');
// if (age.toLowerCase() === 'yes') {
//     console.log('You are right!');
// } else {
//     console.log('You are wrong!');
// }

// // ex06: increment score if the right answer
// let score = 0;
// let homeTown = prompt('Are you from my city? ');
// if (homeTown.toLowerCase() === 'yes') {
//     score++;
// } else {
//     score--;
// }
// console.log(`Score = ${score}`);

// // ex07: function to add two numbers
// function addTwoNums(n1, n2) {
//     let sum = n1 + n2;
//     return sum;
// }
// let result = addTwoNums(2, 5);
// console.log(`The sum is ${result}`);

// // ex08: function to check the answer
// let score = 0;

// function play(question, answer) {
//     let userAnswer = prompt(`${question}: `);
//     if (userAnswer.toLowerCase() == answer.toLowerCase()) {
//         console.log('You were right!');
//     } else {
//         console.log('You were wrong!');
//     }

// }
// play('Where do I work?', 'Microsoft');

// ex09: print your name 5 times
// // let i = 0;
// // while (i < 5) {
// //     console.log('Mad Kode');
// //     i++;
// // }
// // for (let i = 0; i < 5; i++) {
// //     console.log('Mad Kode');
// // }

// // homework: star pattern
// let star = "";
// let num = parseInt(prompt('Number: '))
// for (let i = 1; i <= num; i++) {

//     for (let j = 1; j <= i; j++) {
//         star += "*";
//     }
//     star += "\n";
// }
// console.log(star);

// homework: inverted star pattern

// // ex10: list grocery items to buy
// let groceryList = ['Milk', 'Cream', 'Ghee', 'Chocolate', 'Jaggery'];
// console.log(`First item: ${groceryList[0]}`);
// console.log(`Third item: ${groceryList[2]}`);
// console.log(`Last item: ${groceryList[(groceryList.length) -1]}`);

// // ex11: print every item on the list
// let groceryList = ['Milk', 'Cream', 'Ghee', 'Chocolate', 'Jaggery'];
// for (let i = 0; i < (groceryList.length); i++) {
//     console.log(`Item ${i+1}: ${groceryList[i]}`);
// }