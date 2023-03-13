//get random
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "images/dice" + randomNumber1 + ".png";//naming rand to img
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);//select elem

//set random
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";//naming rand to img
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);//select elem

//remarks
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Play 1 Wins!✌️";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!✌️";
}
else {
  document.querySelector("h1").innerHTML = "Draw!😊";
}
