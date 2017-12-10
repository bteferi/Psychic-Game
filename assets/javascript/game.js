// show a message that days Guess what letter Im thinking
var win = 0;
var losses = 0;
var RemainingGuess = 5;
var UserGuess = ''; // this var will be called on dueing the event listner
var AllUser_Guess = [];
var Computer_Choice_list = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ComputerGuess = Computer_Choice_list[Math.floor(Math.random() * Computer_Choice_list.length)];
console.log(ComputerGuess);

//using key presse info in to variable for later use
// this funcion is run when ever the user presses a key
//
// here is the code shown at the start of the html - this will not update because it is not in the function//
// This is just to show when the game starts and it doesnt get updated//

document.querySelector("#RemainingGuess").innerHTML = RemainingGuess; // here it is not updating
document.querySelector("#losses_counter").innerHTML = losses;
document.querySelector("#win_counter").innerHTML = win;



// 2.0 Problem How do I get users guess
//2.0 I need an event listner to get users input
// function starts below //
document.onkeyup = function(event) {
  var UserGuess = event.key;

  AllUser_Guess.push(UserGuess);
  //

  RemainingGuess = RemainingGuess - 1;
  // below is for win //
  if (UserGuess === ComputerGuess) {
    win = win + 1;
  alert("Grate Job: Brook Samuel");

    reset_function();
    document.querySelector("#win_counter").innerHTML = win;
  }

  console.log(ComputerGuess);
  // below is for remaining guess and display letters //
  // also we are updating loss by +1

  // Decreasing remaining guess by 1
  if (RemainingGuess == 0) {
    // we are making it pick another
    alert("C'mon man! U can do better!");
    losses = losses + 1;
    reset_function();
    // we are chanign the number //
  }
  updateDom()

  // ----------------------------------------------------- //
}

function reset_function() {
  RemainingGuess = 5;
  AllUser_Guess = [];
  ComputerGuess = Computer_Choice_list[Math.floor(Math.random() * Computer_Choice_list.length)]; // retarting the game
}

function updateDom() {
  document.querySelector("#losses_counter").innerHTML = losses;
  document.querySelector("#RemainingGuess").innerHTML = RemainingGuess;
  document.querySelector("#AllUser_Guess").innerHTML = AllUser_Guess;
};
