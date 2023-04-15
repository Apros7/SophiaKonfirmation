const buttonFather = document.getElementById("add-one-father");
const scoreLabelFather = document.getElementById("score-father");
const celebrationFather = new Audio("celebrationFather.m4a")

const buttonMother = document.getElementById("add-one-mother");
const scoreLabelMother = document.getElementById("score-mother");
const celebrationMother = new Audio("celebrationMother.m4a")

const title = document.getElementById("Question");
const nextQuestionButton = document.getElementById("nextQuestion")
const song = new Audio("sofia.mp3");

const timerButton = document.getElementById("buttonTimer");
const timerLabel = document.getElementById("timerLabel");

const questions = [
    "Hvad er Sophias yndlingsfag i skolen?",
    "Hvad er Sophias yndlingscomputerspil?",
    "Hvilken farve ville Sophia male sin bil, hvis hun havde en?",
    "Hvilket land vil Sophia helst besøge?",
    "Hvis Sophia skulle have en superkraft, hvad ville den så være?",
    "Hvilken kendt person ville Sophia helst ønske at møde?",
    "Hvad er Sophias livret?",
    "Er Sophia Ravenclaw, Slytherin, Hufflepuff eller Gryffindor?",
    "Hvad er Sophias yndlingsrestaurant?",
    "Hvis Sophia kunne have en hvilken som helst karriere udover medicin, hvad ville hun så vælge?",
    "Hvilke 3 ting ville Sophia tage med på en øde ø?"
]

let scoreFather = 0;
let scoreMother = 0;
let questionIndex = 0;
title.textContent = questions[questionIndex];


buttonFather.addEventListener("click", ( ) => {
    nextQuestionButton.style.visibility = "visible";
    scoreFather++;
    celebrationFather.currentTime = .1;
    celebrationFather.play();
    scoreLabelFather.textContent = scoreFather;
})

buttonMother.addEventListener("click", ( ) => {
    nextQuestionButton.style.visibility = "visible";
    scoreMother++;
    celebrationMother.play();
    scoreLabelMother.textContent = scoreMother;

    setTimeout(() => {
        celebrationMother.pause();
      }, 1860);

    celebrationMother.currentTime = 0;
})

async function setCookies() {
    return new Promise((resolve, reject) => {
        document.cookie = "scoreMother=" + scoreMother + ";path=/";
        document.cookie = "scoreFather=" + scoreFather + ";path=/";
        resolve();
    });
}

nextQuestionButton.addEventListener("click", async () => {
    nextQuestionButton.style.visibility = "hidden";
    questionIndex++;
    timerButton.style.visibility = "visible";
    if (questionIndex > questions.length - 1) {
        await setCookies();
        location.href = "celebration.html";
    } else {
        title.textContent = questions[questionIndex];
    }
})

timerButton.addEventListener("click", () => {
    let countdown = 20;
    song.play();
    timerButton.style.visibility = "hidden";
    timerLabel.textContent = countdown;
    timerLabel.style.visibility = "visible";

    let countdownInterval = setInterval(() => {
        countdown--; // Decrement the countdown value by 1
        timerLabel.textContent = countdown; // Update the countdown label with the new value

        if (countdown === 0) { // When the countdown reaches 0
        clearInterval(countdownInterval); // Stop the countdown interval
        timerLabel.style.visibility = "hidden"; // Hide the countdown label
        song.pause(); // Stop the song
        }
    }, 1000); // Run the countdown every 1 second (1000 milliseconds)

})

