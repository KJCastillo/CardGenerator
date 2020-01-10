/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  // document.querySelector(".card").classList.add(randomSuit());
  // document.querySelector(".card").innerHTML = randomFace();

  document.querySelector("#btn").addEventListener("click", function() {
    document.querySelector(".card").innerHTML = randomFace();
    document.querySelector(".card").classList.add(randomSuit());
  });

  userName();
};

let randomFace = () => {
  let face = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
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
