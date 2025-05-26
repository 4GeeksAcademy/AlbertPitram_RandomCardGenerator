window.onload = function () {
  const button = document.getElementById("generateBtn");
  button.addEventListener("click", generateCard);

  generateCard(); // Mostrar una al iniciar
  setInterval(generateCard, 10000); // Cada 10s
};

function generateCard() {
  const suits = ["heart", "spade", "club", "diamond"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const value = values[Math.floor(Math.random() * values.length)];
  const symbol = getSuitSymbol(suit);

  const width = document.getElementById("widthInput").value || 180;
  const height = document.getElementById("heightInput").value || 250;

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card-custom", getBootstrapColorClass(suit));
  cardDiv.style.width = `${width}px`;
  cardDiv.style.height = `${height}px`;

  cardDiv.innerHTML = `
    <div class="corner top-left">${symbol}</div>
    <div>${value}</div>
    <div class="corner bottom-right">${symbol}</div>
  `;

  const container = document.getElementById("card-container");
  container.innerHTML = "";
  container.appendChild(cardDiv);
}

function getSuitSymbol(suit) {
  return {
    heart: "♥",
    spade: "♠",
    club: "♣",
    diamond: "♦"
  }[suit];
}

function getBootstrapColorClass(suit) {
  return (suit === "heart" || suit === "diamond") ? "text-danger" : "text-dark";
}
