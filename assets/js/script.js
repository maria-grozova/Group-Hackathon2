/*
* This is a personality quiz to show what kind of dog you are
* The quiz contains 10 questions and there are 9 possible results + a wildcard if the user does not have a unique high score across categories
* In each question, there is an answer mapped directly to each of the 9 proosible outcomes
*/

// Wait for DOM to finish loading before running the quiz
// Set variables for game elements

document.addEventListener("DOMContentLoaded", function() {

    const quizArea = document.getElementById("quiz-area");
    const questionArea = document.getElementById("questions");
    const answerArea = document.getElementById("answers");
    const answerCard = document.getElementsByClassName("answer-card");
    let startBtn = document.getElementById("start-btn");
    const submitBtn = document.getElementById("submit-button");
    const nextBtn = document.getElementById("next-button");
    //const restartBtn = document.getElementById("");
    const progressCount = document.getElementById("question-count");
    let quizActive = false;

    
    console.log("page loaded");
    const dialog = document.querySelector("dialog");
    
    dialog.showModal();
      

    startBtn.addEventListener("click", runQuiz);
    


});

// Questions


// Answers


// Function running the Quiz

function runQuiz() {
    quizActive = true;
   let dialog = document.querySelector("dialog");
    dialog.classList.add("hide");
    console.log("quiz started");
}