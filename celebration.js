drumRoll = new Audio("DrumRoll.mp3");

drumRoll.play();

function getCookie(name) {
    let cookieValue = "";
    if (document.cookie && document.cookie !== "") {
      let cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(name + "=")) {
          cookieValue = cookie.substring(name.length + 1);
          break;
        }
      }
    }
    return cookieValue;
}

let motherScore = getCookie("scoreMother");
let fatherScore = getCookie("scoreFather");

console.log(motherScore)
console.log(fatherScore)

if (motherScore > fatherScore) {
    let pictureElement = document.getElementById("picture");
    pictureElement.src = "mother.jpeg";
}

function make_confetti_top(i) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    
    // Set a random color for each confetti element
    const colors = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722"];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Set a starting position at the bottom center of the screen
    const x = window.innerWidth / 2
    const y = -2
    confetti.style.left = `${x}px`;
    confetti.style.top = `${y}px`;

    confetti.style.setProperty("--random-x", Math.random() - .5);
    confetti.style.setProperty("--random-y", Math.random() / 2);
    return confetti
}

function make_confetti_bottom(i) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    
    // Set a random color for each confetti element
    const colors = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722"];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Set a starting position at the bottom center of the screen
    const x = window.innerWidth / 2
    const y = window.innerHeight
    confetti.style.left = `${x}px`;
    confetti.style.top = `${y}px`;

    confetti.style.setProperty("--random-x", Math.random() - .5);
    confetti.style.setProperty("--random-y", (Math.random() / 2) * -1);
    return confetti
}

setTimeout(() => {
    let pictureElement = document.getElementById("picture");
    pictureElement.style.visibility = "visible";
    const confettiContainer = document.getElementById(
    "confetti-container"
    );
    for (let i = 0; i < 200; i++) {
    confettiContainer.appendChild(make_confetti_top(i));
    confettiContainer.appendChild(make_confetti_bottom(i));
    }
    setInterval(() => {
    for (let i = 0; i < 200; i++) {
        confettiContainer.appendChild(make_confetti_top(i));
        confettiContainer.appendChild(make_confetti_bottom(i));
        }
    }, 1000);
}, 6500)