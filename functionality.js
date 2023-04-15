const buttonFather = document.getElementById("add-one-father");
const scoreLabelFather = document.getElementById("score-father");
const celebrationFather = new Audio("celebrationFather.m4a")

const buttonMother = document.getElementById("add-one-mother");
const scoreLabelMother = document.getElementById("score-mother");
const celebrationMother = new Audio("celebrationMother.m4a")

const title = document.getElementById("Question");
const nextQuestionButton = document.getElementById("nextQuestion")

const questions = [
    "Hvad er Sophias yndlingsfag i skolen?",
    "Hvad er Sophias yndlingscomputerspil?",
    "Hvilken farve ville Sophia male sin bil, hvis hun havde en?",
    "Foretrækker Sophia at se film eller serier?",
    "Hvilket land vil Sophia helst besøge?",
    "Hvis Sophia skulle have en superkraft, hvad ville den så være?",
    "Hvilken kendt person ville Sophia ønske at møde?",
    "Hvad er Sophias yndlingsmusikgenre?",
    "Hvad er Sophias yndlingsbog?",
    "Hvilken sport finder Sophia mest interessant?",
    "Hvad er Sophias livret?"
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

nextQuestionButton.addEventListener("click", () => {
    nextQuestionButton.style.visibility = "hidden";
    questionIndex++;
    if (questionIndex > questions.length) {
        celebration()
    } else {
        title.textContent = questions[questionIndex];
    }
})


// needs to be done
function celebration() {
    null
}

