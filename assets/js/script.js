/*
* This is a personality quiz to show what kind of dog you are
* The quiz contains 10 questions and there are 9 possible results + a wildcard if the user does not have a unique high score across categories
* In each question, there is an answer mapped directly to each of the 9 proosible outcomes
*/

// Wait for DOM to finish loading before running the quiz
// Set variables for game elements

document.addEventListener("DOMContentLoaded", function()) {

    const gameArea = document.getElementById("");
    const questionArea = document.getElementById("");
    const answerArea = document.getElementById("");
    const answerCard = document.getElementsByClassName("");
    const startBtn = document.getElementById("");
    const submitBtn = document.getElementById("");
    const nextBtn = document.getElementById("");
    const restartBtn = document.getElementById("");
    const progressCount = document.getElementById("");
    let quizActive = false;

    if (quizActive === false) {

    }

    startBtn.addEventListener("click", runQuiz());

}

// Questions


// Answers


// Function running the Quiz

function runQuiz() {
    quizActive = true;
}