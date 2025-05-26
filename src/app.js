import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const suits = ["heart", "spade", "club", "diamond"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const value = values[Math.floor(Math.random() * values.length)];

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card-custom", getBootstrapColorClass(suit));

  const symbol = getSuitSymbol(suit);

  cardDiv.innerHTML = `
    <div class="corner top-left">${symbol}</div>
    <div>${value}</div>
    <div class="corner bottom-right">${symbol}</div>
  `;

  document.getElementById("card-container").appendChild(cardDiv);
};

function getSuitSymbol(suit) {
  switch (suit) {
    case "heart": return "♥";
    case "spade": return "♠";
    case "club": return "♣";
    case "diamond": return "♦";
  }
}

function getBootstrapColorClass(suit) {
  return suit === "heart" || suit === "diamond" ? "text-danger" : "text-dark";
}