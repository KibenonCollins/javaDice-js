// Player 1
var randonNumber1 = Math.floor(Math.random() * 6 ) + 1 ;
var randomDice = "images/dice" + randonNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDice);

// player 2
var randonNumber2 = Math.floor(Math.random() * 6 ) + 1 ;
var randomDice1 = "images/dice" + randonNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDice1);

 if (randonNumber1 > randonNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins🚩";
};
if (randonNumber2 > randonNumber1) {
document.querySelector("h1").innerHTML = "Player 2 wins🚩";
}
if (randonNumber1 === randonNumber2){
document.querySelector("h1").innerHTML = "Draw👊";}
