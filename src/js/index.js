/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  // document.querySelector(".card").classList.add(randomSuit());
  // document.querySelector(".card").innerHTML = randomFace();
  let history = [];
  let suit = "";
  let card = document.querySelector(".card");
  suit = randomSuit();
  history.push(suit);
  document.querySelector("#btn").addEventListener("click", function() {
    suit = randomSuit();
    history.push(suit);
    console.log("card history: ", history);
    console.log("new suit: ", suit);
    card.innerHTML = randomFace();
    card.classList.remove(history[history.length - 2]);
    card.classList.add(suit);
  });

  userName();
};

let randomFace = () => {
  let face = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let faceCard = [Math.floor(Math.random() * face.length)];

  return face[faceCard];
};

let randomSuit = () => {
  let suit = ["diamond", "heart", "spade", "club"];
  let suitCard = [Math.floor(Math.random() * suit.length)];

  return suit[suitCard];
};

function userName() {
  var nameText = "";
  nameText = "Hello " + prompt("what’s your name?");
  document.getElementById("name").innerHTML = nameText;
}
