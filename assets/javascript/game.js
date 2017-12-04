// show a message that days Guess what letter Im thinking
var win=0;
var losses=0;
var RemainingGuess=3;
// 2.0 Problem How do I get users guess
//2.0 I need an event listner to get users input
//using key presse info in to variable for later use
// this funcion is run when ever the user presses a key

   document.onkeyup = function(event) {
      var UserGuess=event.key;

//3.0 Problem : How do I get the computers choice ?
// I should have a variable that holds an array of the alphabet.
        var Computer_Choice_list =["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//4.0 Problem : how can i pick a random number from the array
//4.0 solution create another variable to create a random pick from the array containing the alpabet but to pick one randomly
        var ComputerGuess = Computer_Choice_list[Math.floor(Math.random() * Computer_Choice_list.length)];
//5.0 Problem compare guesses to one another and determin results
//5.0 solution : use a forloop and inside it an if else Use conditional statments

  if (UserGuess == ComputerGuess){ // if the two are equal - then update the win var by one
    win++;
// else keep running the game until the user runs out of the max guess.Set a variable that gives you a set of numbers of guesses
// else decrease remaining guess
// if remaing guess = 0
// then update loss to 1++
}
else if (RemainingGuess<=3){
  alert("I wanted to see if this works");
}
// Here keep the game going
//while decreaing RemainingGuess by 1.
else{
alert("again trying to see if it works")
// here I would say if

// Problem 6: Update the actual HTML file
// create a variable to show the actual guess using data from results of game. I am gone use a query selector


var html =
  "<p>Wins: " + win + "</p>" +
  "<p>Losses:" + losses + "</p>" +
  "<p> Guess left: " + RemainingGuess + "</p>";

// Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;
}


};
