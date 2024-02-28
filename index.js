picture = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var index1 = randomNumber1 - 1;
  document.querySelector(".img1").setAttribute("src", picture[index1]);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var index2 = randomNumber2 - 1;
  document.querySelector(".img2").setAttribute("src", picture[index2]);

  if (index1 > index2) {
    document.querySelector(".title").innerHTML = "✨ Player 1 won!";
  } else if (index1 < index2) {
    document.querySelector(".title").innerHTML = "Player 2 won! ✨";
  } else {
    document.querySelector(".title").innerHTML = "Draw !";
  }
}
