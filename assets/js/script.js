
/* QUIZ STATE AND VARIABLES */
let currentQuestionIndex = 0;  // Tracks user's current question index
let isQuizActive = true;       // Boolean to check if the quiz is still ongoing

let dogPersonalityScores = [   // Array to hold scores for each dog personality type
    0,  // party dog
    0,  // food dog
    0,  // fashion dog
    0,  // surf dog
    0,  // dev dog
    0,  // business dog
    0,  // sport dog
    0,  // artist dog
    0   // snoop dogg
];

let currentSelectionScores = dogPersonalityScores;  // Temporary array to store scores for the current selection

/* QUIZ BUILDING VARIABLES */
const questionText = [
    "(1/10) &nbsp&nbsp&nbsp What's your favourite colour?",                                     // q1
    "(2/10) &nbsp&nbsp&nbsp It's the weekend, what's your ideal plan?",                         // q2
    "(3/10) &nbsp&nbsp&nbsp What's on your favourite playlist?",                                // q3
    "(4/10) &nbsp&nbsp&nbsp What would you call your memoir?",                                  // q4
    "(5/10) &nbsp&nbsp&nbsp Which kind of exercise do you prefer?",                             // q5
    "(6/10) &nbsp&nbsp&nbsp Pick a drink...",                                                  // q6
    "(7/10) &nbsp&nbsp&nbsp You're about to adopt a dog, which boi is calling your name?",      // q7
    "(8/10) &nbsp&nbsp&nbsp What's your favourite social media platform?",                      // q8
    "(9/10) &nbsp&nbsp&nbsp What's your dream holiday destination?",                            // q9
    "(10/10) &nbsp&nbsp&nbsp What would your friends describe you as..."                        // q10
];

const answerText = [
    ["Gold", "Yellow", "Pink", "Turquoise", "Blue", "Grey", "Red", "Purple", "Green"],          // q1 answers
    ["Out on the town, having a drink and a dance", "Trying out the coolest new restaurants",   // q2 answers
     "Going on a shopping spree with my friends", "Catching rays on the beach",
     "Working on my new coding project", "Checking in with the latest stock market news",
     "Watching the game with my boys", "Visiting the new gallery exhibit",
     "Chilling with my homies"],                                                              
    ["‘U Can’t Touch This’ by MC Hammer", "'Banana Pancakes' by Jack Johnson",                  // q3 answers
     "'Vogue' by Madonna", "'Surfin’ U.S.A.' by The Beach Boys", "'Mr. Roboto' by Styx",
     "‘Gold Digger’ by Kanye West feat. Jamie Foxx", "'Eye of the Tiger' by Survivor",
     "'Applause' by Lady Gaga", "'Drop It Like It's Hot' by Snoop Dogg"],                     
    ["Life in the VIP Lane", "Eat, Pray, Eat", "Fierce, Fresh and Fabulous",                    // q4 answers
     "Amped for Life", "Element of Surprise", "Path to Ultimate Success",
     "Ultimate Win: One Pint at a Time", "Making Your Joy", "That's Dope, Fo Shizzle"],        
    ["Getting down on the dance floor", "Walking to the front door to get my Deliveroo",        // q5 answers
     "Puppy yoga", "Water sports", "404 - answer not found", "Golf", "A game of footie",
     "A nature hike", "I don't exercise"],                                                   
    ["SHOTS!", "A nice glass of wine", "Aperol Spritz", "Ice cold cerveza",                    // q6 answers
     "Anything caffeinated", "The most expensive bottle on the menu", "A pint at my local",
     "Green tea", "Gin and juice"],                                                            
    ["The most social boi", "A chonker", "Itty bitty boi", "Adorable pupper",                  // q7 answers
     "A cat", "Big boi", "Speedy boi", "Floofer", "I choose all of them"],                    
    ["Facebook", "Instagram", "TikTok", "I don't like social media",                           // q8 answers
     "Reddit", "LinkedIn", "YouTube", "Twitch", "SnapchaT"],                                 
    ["Ibiza", "Italy", "Paris", "Hawaii", "San Francisco", "New York City",                    // q9 answers
     "Skiing in the Alps", "A quiet retreat in the countryside", "Long Beach, Cali (Fo Sho')"],
    ["Epic", "Foodie", "Easy Breezy Beautiful", "Far Out", "Logical", "Successful",            // q10 answers
     "Athletic", "Creative", "Super chill"]                                                   
];

const answerValues = [
    [[1,0,0,0,0,0,0,0,0], [0,1,0,0,0,0,0,0,0], [0,0,1,0,0,0,0,0,0], [0,0,0,1,0,0,0,0,0],       // q1 values
     [0,0,0,0,1,0,0,0,0], [0,0,0,0,0,1,0,0,0], [0,0,0,0,0,0,1,0,0], [0,0,0,0,0,0,0,1,0], 
     [0,0,0,0,0,0,0,0,1]],
    [[1,0,0,0,0,0,0,0,0], [0,1,0,0,0,0,0,0,0], [0,0,1,0,0,0,0,0,0], [0,0,0,1,0,0,0,0,0],       // q2 values
     [0,0,0,0,1,0,0,0,0], [0,0,0,0,0,1,0,0,0], [0,0,0,0,0,0,1,0,0], [0,0,0,0,0,0,0,1,0], 
     [0,0,0,0,0,0,0,0,1]],
    [[1,0,0,0,0,0,0,0,0], [0,1,0,0,0,0,0,0,0], [0,0,1,0,0,0,0,0,0], [0,0,0,1,0,0,0,0,0],       // q3 values
     [0,0,0,0,1,0,0,0,0], [0,0,0,0,0,1,0,0,0], [0,0,0,0,0,0,1,0,0], [0,0,0,0,0,0,0,1,0], 
     [0,0,0,0,0,0,0,0,1]],
    [[1,0,0,0,0,0,0,0,0], [0,1,0,0,0,0,0,0,0], [0,0,1,0,0,0,0,0,0], [0,0,0,1,0,0,0,0,0],       // q4 values
     [0,0,0,0,1,0,0,0,0], [0,0,0,0,0,1,0,0,0], [0,0,0,0,0,0,1,0,0], [0,0,0,0,0,0,0,1,0], 
     [0,0,0,0,0,0,0,0,1]],
    [[1,0,0,0,0,0,0,0,0], [0,1,0,0,0,0,0,0,0], [0,0,1,0,0,0,0,0,0], [0,0,0,1,0,0,0,0,0],       // q5 values
     [0,0,0,0,1,0,0,0,0], [0,0,0,0,0,1,0,0,0], [0,0,0,0,0,0,1,0,0], [0,0,0,0,0,0,0,1,0], 
     [0,0,0,0,0,0,0,0,1]],
    [[1,0,0,0,0,0,0,0,0], [0,1,0,0,0,0,0,0,0], [0,0,1,0,0,0,0,0,0], [0,0,0,1,0,0,0,0,0],       // q6 values
     [0,0,0,0,1,0,0,0,0], [0,0,0,0,0,1,0,0,0], [0,0,0,0,0,0,1,0,0], [0,0,0,0,0,0,0,1,0], 
     [0,0,0,0,0,0,0,0,1]],
    [[1,0,0,0,0,0,0,0,0], [0,1,0,0,0,0,0,0,0], [0,0,1,0,0,0,0,0,0], [0,0,0,1,0,0,0,0,0],       // q7 values
     [0,0,0,0,1,0,0,0,0], [0,0,0,0,0,1,0,0,0], [0,0,0,0,0,0,1,0,0], [0,0,0,0,0,0,0,1,0], 
     [0,0,0,0,0,0,0,0,1]],
    [[1,0,0,0,0,0,0,0,0], [0,1,0,0,0,0,0,0,0], [0,0,1,0,0,0,0,0,0], [0,0,0,1,0,0,0,0,0],       // q8 values
     [0,0,0,0,1,0,0,0,0], [0,0,0,0,0,1,0,0,0], [0,0,0,0,0,0,1,0,0], [0,0,0,0,0,0,0,1,0], 
     [0,0,0,0,0,0,0,0,1]],
    [[1,0,0,0,0,0,0,0,0], [0,1,0,0,0,0,0,0,0], [0,0,1,0,0,0,0,0,0], [0,0,0,1,0,0,0,0,0],       // q9 values
     [0,0,0,0,1,0,0,0,0], [0,0,0,0,0,1,0,0,0], [0,0,0,0,0,0,1,0,0], [0,0,0,0,0,0,0,1,0], 
     [0,0,0,0,0,0,0,0,1]],
    [[1,0,0,0,0,0,0,0,0], [0,1,0,0,0,0,0,0,0], [0,0,1,0,0,0,0,0,0], [0,0,0,1,0,0,0,0,0],       // q10 values
     [0,0,0,0,1,0,0,0,0], [0,0,0,0,0,1,0,0,0], [0,0,0,0,0,0,1,0,0], [0,0,0,0,0,0,0,1,0], 
     [0,0,0,0,0,0,0,0,1]]
];

/* SHORTCUT VARIABLES */
const results = document.getElementById("results");
const quiz = document.getElementById("quiz");
const body = document.body.style;
const printResult = document.getElementById("topScore");
const buttonElement = document.getElementById("button");

/* QUIZ FUNCTIONALITY */
buttonElement.addEventListener("click", changeState);  // Add click event listener to main button

/* This function progresses the user through the quiz */
function changeState() {
    updatePersonality();  // Adds the values of the tempStats to the userStats

    if (isQuizActive) {
        // True while the user has not reached the end of the quiz
        initText(currentQuestionIndex);  // sets up next question based on user's progress through quiz
        currentQuestionIndex++;  // advances progress through quiz

        buttonElement.disabled = true;  // disables button until user chooses next answer
        buttonElement.innerHTML = "Please select an answer";
        buttonElement.style.opacity = 0.7;
    } else {
        // All questions answered
        showResultPage();  // runs set up for result page
    }
}

/* This function determines the question and answer content based on user progress through the quiz */
function initText(question) {
    let answerSelection = ""; // text variable containing HTML code for the radio buttons' content

    // Creates radio buttons based on user progress through the quiz
    for (i = 0; i < answerText[question].length; i++) {
        answerSelection += "<li><input type='radio' name='question" +
            (question + 1) + "' onClick='setAnswer(" + i + ")' id='" + answerText[question][i] + "'><label for='" + answerText[question][i] + "'>" + answerText[question][i] + "</label></li>";
    }

    document.getElementById("questions").innerHTML = questionText[question];  // set question text
    document.getElementById("answers").innerHTML = answerSelection;  // set answer text
}

/* This function is called when a user selects an answer, NOT when answer is submitted */
function setAnswer(input) {
    resetTempScores();  // clear tempStats in case user reselects their answer

    currentSelectionScores = answerValues[currentQuestionIndex - 1][input];  // selects personality values based on user selection

    if (currentQuestionIndex < questionText.length) {
        // True while the user has not reached the end of the quiz
        buttonElement.innerHTML = "Continue";
        buttonElement.disabled = false;
        buttonElement.style.opacity = 1;
    } else {
        // All questions answered
        isQuizActive = false;
        buttonElement.innerHTML = "Display your dog type"
        buttonElement.disabled = false;
        buttonElement.style.opacity = 1;
    }
}

/* This function resets tempScores to 0 */
function resetTempScores() {
    currentSelectionScores = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}

/* This function adds the values of the tempScores to the userScores based on user selection */
function updatePersonality() {
    for (i = 0; i < dogPersonalityScores.length; i++) {
        dogPersonalityScores[i] += currentSelectionScores[i];
    }
}

/* This function determines the highest personality value */
function showResultPage() {
    let highestScoreIndex = 0;  // highest stat defaults as 'party dog'

    // This statement loops through all personality stats and updates highestScoreIndex based on the highest stat
    for (i = 1; i < dogPersonalityScores.length; i++) {
        if (dogPersonalityScores[i] > dogPersonalityScores[highestScoreIndex]) {
            highestScoreIndex = i;
        }
    }

    displayResultPage(highestScoreIndex);  // passes the index value of the highest stat discovered

    // Hides the quiz content, shows results content
    quiz.style.display = "none";
}

/* BUILDS WEB PAGE AS PER RESULTS OF THE QUIZ */
function displayResultPage(personality) {
    let embedCode;
    let dogType;

    switch (personality) {
        case 0: // party dog
            embedCode = '<iframe src="https://giphy.com/embed/eB4iKBxl84RGZdF65g" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/devxart-cachorro-dana-danando-eB4iKBxl84RGZdF65g">via GIPHY</a></p>';
            dogType = "party-dog";
            break;
        case 1: // food dog
            embedCode = '<iframe src="https://giphy.com/embed/9fuvOqZ8tbZOU" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/happiness-9fuvOqZ8tbZOU">via GIPHY</a></p>';
            dogType = "food-dog";
            break;
        case 2: // fashion dog
            embedCode = '<iframe src="https://giphy.com/embed/5AlU8U5mHf0AJFc5oq" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/americankennelclub-akc-american-kennel-club-toy-dog-5AlU8U5mHf0AJFc5oq">via GIPHY</a></p>';
            dogType = "fashion-dog";
            break;
        case 3: // surf dog
            embedCode = '<iframe src="https://giphy.com/embed/9D8SldWd6lmVbHwRB1" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/wsl-surf-9D8SldWd6lmVbHwRB1">via GIPHY</a></p>';
            dogType = "surf-dog";
            break;
        case 4: // dev dog
            embedCode = '<iframe src="https://giphy.com/embed/1kkxWqT5nvLXupUTwK" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/youtube-best-seriously-1kkxWqT5nvLXupUTwK">via GIPHY</a></p>';
            dogType = "dev-dog";
            break;
        case 5: // business dog
            embedCode = '<iframe src="https://giphy.com/embed/irBRf1pU2hqDj73DKm" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/GeorgetownUniversity-bulldog-bull-dog-georgetown-university-irBRf1pU2hqDj73DKm">via GIPHY</a></p>';
            dogType = "business-dog";
            break;
        case 6: // sport dog
            embedCode = '<iframe src="https://giphy.com/embed/qseAluIreBnfLgsLpt" width="480" height="266" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nfl-sports-football-sport-qseAluIreBnfLgsLpt">via GIPHY</a></p>';
            dogType = "sport-dog";
            break;
        case 7: // artist dog
            embedCode = '<iframe src="https://giphy.com/embed/oLh9Wmf10GKNq" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/assistant-painter-eyebleach-oLh9Wmf10GKNq">via GIPHY</a></p>';
            dogType = "artist-dog";
            break;
        case 8: // snoop dogg
            embedCode = '<iframe src="https://giphy.com/embed/dakmFeWHG8ZJFJQLFG" width="480" height="432" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/buzzfeed-buzzfeed-celeb-puppies-puppy-interview-dakmFeWHG8ZJFJQLFG">via GIPHY</a></p>';
            dogType = "snoop-dogg";
            break;
        default:
            document.getElementById("error").style.display = "inline-block";
            return;
    }

    document.getElementById("img1").innerHTML = embedCode;  // set the embed code for the GIF
    printResult.innerText = dogType;
    results.style.display = "inline-block";
    body.background = "none";
    body.backgroundColor = "#FEF9EF";
    body.backgroundSize = "100% auto";
}

/* This function sets tempScores to 0 */
function resetTempScores() {
    currentSelectionScores = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}

