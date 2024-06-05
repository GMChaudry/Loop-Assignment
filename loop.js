//==============================1. Creating a Lesson Plan(Using for loop )=======================//
/*let myWork:{name:string;status:boolean}[]=[];

for (let i =1; i <=10;i++){
  let lesson={
    name:`lesson ${i}`,
    status:i % 2 ===1
  }

  myWork.push(lesson)

  }

  console.log(myWork)
  */
//==============================2. Guessing Game (Using while loop )=======================//
var maxNumber = 10;
var randomNumber = Math.floor(Math.random() * maxNumber) + 1;
console.log("randomNumber is ".concat(randomNumber));
var userGuess = false;
var userGuesses = [1, 4, 7, 9];
var i = -1;
while (!userGuess && i < userGuesses.length) {
    var guessedNumber = userGuesses[i];
    //console.log(userGuesses[i]);
    if (guessedNumber === randomNumber) {
        console.log("Correct", "Congrats you guessed the random number");
        userGuess = true;
    }
    else if (guessedNumber > randomNumber) {
        console.log("false", "Guessed number is too low");
    }
    else {
        console.log("false", "Guessed number is too high");
    }
    i++;
}
if (!userGuess) {
    console.log("None of the guesses were correct.");
}
//==============================3. Counter Incrementer (Using do while loop )======================//
/*let counter:number = 0;
let step :number =+ 10;
do {
  console.log(counter);
  counter+=step;
}
while (counter < 100);

console.log(counter)
*/
//==============================4.Exploring Objects with for...in Loop======================//
/*let myObject={
  item1:"watches",
  item2:"T-shrits",
  item3:"Glasses"
};
for (let x in myObject){
  console.log(`${x} contains ${myObject[x]}`)

}
*/
//==============================5.Exploring Arrays with Loops(Using loop )======================//
/*let myArray:number[]=[];
for (let arr=0; arr<=10;arr++){
  myArray.push(arr)
  console.log(arr)
  
}
console.log(myArray)
for (let x=0; x<myArray.length; x++){
  console.log(`index:${x},value ${myArray[x]}`)
}

for (let a of myArray){
  console.log(`array element at index ${a} is ${myArray[a]}`)
}
*/ 
