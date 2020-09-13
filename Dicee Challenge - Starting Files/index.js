//First Generate a random number and store it in randomNumber1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource =
	"Dicee Challenge - Starting Files/images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// For the second Dice
var randomNumber2 = Math.round(Math.random() * 6) + 1;
var randomImageSource2 =
	"Dicee Challenge - Starting Files/images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//For the Title to respond to the value of the Random Number
if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
	document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
	document.querySelector("h1").innerHTML = "It's a Draw";
}
