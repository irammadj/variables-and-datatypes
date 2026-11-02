const pet = "cat"; //the constant is cat
console.log(pet); //prints out the constant `cat`

let lives = 9; //variable is 9 which is a number
lives = 8; //changes the variable into a different number which is now 8
console.log(lives); //prints out the new variable which is now 8

const colors = ["red", "green", "blue"]; //the constants are colors red [0], green [1] and blue[2]
console.log(colors[1]); //prints out color green[1]

console.log(Boolean("")); //prints out false because there is nothing inside the booleans
console.log(Boolean("hello")); // prints out true because there is a string inside the booleans
console.log(Number("25")); //prints out the string "25" into a number

const userName = ""; //declares the constant that is empty/ falsy!

if (userName) {
  //declares that if the falsy constant is declared, then the next line will be follow
  console.log("Welcome, " + userName); //once the falsy constant is declared, this is what should be printed out "Welcome, and the declared username"
} else {
  //if the falsy constant will not be declared then this is what should happen!
  console.log("Please enter your name"); //prints out the string "Please enter your name"
}
