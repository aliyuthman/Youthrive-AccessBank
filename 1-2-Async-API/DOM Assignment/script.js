function makeSquare() {
  const element = document.getElementById("careerexLogo");

  const logoStatus = document.createElement("h2");
  logoStatus.textContent = "Hey! You are in Square ";
  const container = document.getElementById("container");
  container.appendChild(logoStatus);

  if (element) {
    element.classList.add("makeSquare");
    element.classList.remove("makeRound");
  } else {
    console.error(`Element with ID not found.`);
  }
}

function makeRound() {
  const element = document.getElementById("careerexLogo");

  element.classList.add("makeRound");
  element.classList.remove("makeSquare");
}
