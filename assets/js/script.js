	
	/* LIST OF VARIABLES */		
	let questionState = 0;	//Keeps track of users place in quiz
	let quizActive = true;	//True until last question is answered
		
	let userStats =	[
						0,	//party dog
						0, 	//food dog
						0, 	//fashion dog
						0, 	//surf dog
						0, 	//dev dog
						0, 	//business dog
                        0,  //sport dog
                        0,  //artist dog
                        0   //snoop dog
                    ];
                
	let tempStats = userStats; //Holds stat increases relating to user selection
	
	/* QUIZ BUILDING VARIABLES */
	//The following array contains all question text elements
	
	let questionText =	[															
							"(1/10) &nbsp&nbsp&nbsp What's your favourite colour?", 	                                    //q1
							"(2/10) &nbsp&nbsp&nbsp It's the weekend, what's your ideal plan?", 			            	//q2
							"(3/10) &nbsp&nbsp&nbsp What's on your favourite playlist?", 	                                //q3
							"(4/10) &nbsp&nbsp&nbsp What would you call your memoir?", 	        			                //q4
							"(5/10) &nbsp&nbsp&nbsp Which kind of excercise do you prefer?",       			                //q5
							"(6/10) &nbsp&nbsp&nbsp Pick a drink...",                               			            //q6
                            "(7/10) &nbsp&nbsp&nbsp You're about to adopt a dog, which boi is calling your name?", 	        //q7
                            "(8/10) &nbsp&nbsp&nbsp What's your favourite social media platform?",                          //q8
                            "(9/10) &nbsp&nbsp&nbsp What's your dream holiday destination?",                                //q9
							"(10/10) &nbsp&nbsp&nbsp What would your friends describe you as..."       			            //q10
						];
	
	//The following array contains all answer text elements for each question
	
	let answerText =	[		//question 1 answers													
							    [   "Gold", 				
								    "Yellow", 
								    "Pink",
								    "Turquoise",
								    "Blue",
								    "Grey",
                                    "Red",
                                    "Purple",
                                    "Green"],							
								
								//question 2 answers
                                [   "Out on the town, having a drink and a dance", 				
                                    "Trying out the coolest new restaurants", 
                                    "Going on a shopping spree with my friends",
                                    "Catching rays on the beach",
                                    "Working on my new coding project",
                                    "Checking in with the latest stock market news",
                                    "Watching the game with my boys",
                                    "Visiting the new gallery exhibit",
                                    "Chilling with my homies"],							
                                    
								//question 3 answers
                                [	"‘U Can’t Touch This’ by MC Hammer", 				
                                    "'Banana Pancakes' by Jack Johnson", 
                                    "'Vogue' by Madonna",
                                    "'Surfin’ U.S.A.' by The Beach Boys",
                                    "'Mr. Roboto' by Styx",
                                    "‘Gold Digger’ by Kanye West feat. Jamie Foxx",
                                    "'Eye of the Tiger' by Survivor",
                                    "'Applause' by Lady Gaga",
                                    "'Drop It Like It's Hot' by Snoop Dogg"],							
                                    
								//question 4 answers
                                [	"Life in the VIP Lane", 				
                                    "Eat, Pray, Eat", 
                                    "Fierce, Fresh and Fabulous",
                                    "Amped for Life",
                                    "<Element> of Surprise",
                                    "Path to Ultimate Success",
                                    "Ultimate Win: One Pint at a Time",
                                    "Making Your Joy",
                                    "That's Dope, Fo Shizzle"],							
                                    
								//question 5 answers
                                [	"Getting down on the dance floor", 				
                                    "Walking to the front door to get my Deliveroo", 
                                    "Puppy yoga",
                                    "Water sports",
                                    "404 - answer not found",
                                    "Golf",
                                    "A game of footie",
                                    "A nature hike",
                                    "I don't exercise"],							
    
								//question 6 answers								
                                [	"SHOTS!", 				
                                    "A nice glass of wine", 
                                    "Aperol Spritz",
                                    "Ice cold cerveza",
                                    "Anything caffeinated",
                                    "The most expensive bottle on the menu",
                                    "A pint at my local",
                                    "Green tea",
                                    "Gin and juice"],							

								//question 7 answers								
                                [	"The most social boi", 				
                                    "A chonker", 
                                    "Itty bitty boi",
                                    "Adorable pupper",
                                    "A cat",
                                    "Big boi",
                                    "Speedy boi",
                                    "Floofer",
                                    "I choose all of them"],							

								//question 8 answers								
                                [	"Facebook", 				
                                    "Instagram", 
                                    "TikTok",
                                    "I don't like social media",
                                    "Reddit",
                                    "LinkedIn",
                                    "You Tube",
                                    "Twitch",
                                    "SnapchaT"],							
                                    
								//question 9 answers								
                                [	"Ibiza", 				
                                    "Italy", 
                                    "Paris",
                                    "Hawaii",
                                    "San Francisco",
                                    "New York City",
                                    "Skiing in the Alps",
                                    "A quiet retreat in the countryside",
                                    "Long Beach, Cali (Fo Sho')"],							

                                //question 10 answers								
                                [	"Epic", 				
                                    "Foodie", 
                                    "Easy Breezy Beautiful",
                                    "Far Out",
                                    "Logical",
                                    "Successful",
                                    "Athletic",
                                    "Creative",
                                    "Super chill"],							

                                ]
	
	//The following array contains all personality stat increments for each answer of every question
	let answerValues =	[	//question 1 answer values
							[	[1,0,0,0,0,0,0,0,0], 		
                                [0,1,0,0,0,0,0,0,0], 		
                                [0,0,1,0,0,0,0,0,0], 		
                                [0,0,0,1,0,0,0,0,0], 		
                                [0,0,0,0,1,0,0,0,0], 		
                                [0,0,0,0,0,1,0,0,0], 		
                                [0,0,0,0,0,0,1,0,0], 		
                                [0,0,0,0,0,0,0,1,0], 		
                                [0,0,0,0,0,0,0,0,1] 
                            ],	
						
								//question 2 answer values
                            [	[1,0,0,0,0,0,0,0,0], 		
                                [0,1,0,0,0,0,0,0,0], 		
                                [0,0,1,0,0,0,0,0,0], 		
                                [0,0,0,1,0,0,0,0,0], 		
                                [0,0,0,0,1,0,0,0,0], 		
                                [0,0,0,0,0,1,0,0,0], 		
                                [0,0,0,0,0,0,1,0,0], 		
                                [0,0,0,0,0,0,0,1,0], 		
                                [0,0,0,0,0,0,0,0,1] 
                            ],	

								//question 3 answer values
                            [	[1,0,0,0,0,0,0,0,0], 		
                                [0,1,0,0,0,0,0,0,0], 		
                                [0,0,1,0,0,0,0,0,0], 		
                                [0,0,0,1,0,0,0,0,0], 		
                                [0,0,0,0,1,0,0,0,0], 		
                                [0,0,0,0,0,1,0,0,0], 		
                                [0,0,0,0,0,0,1,0,0], 		
                                [0,0,0,0,0,0,0,1,0], 		
                                [0,0,0,0,0,0,0,0,1] 
                            ],	
								
								//question 4 answer values
                            [	[1,0,0,0,0,0,0,0,0], 		
                                [0,1,0,0,0,0,0,0,0], 		
                                [0,0,1,0,0,0,0,0,0], 		
                                [0,0,0,1,0,0,0,0,0], 		
                                [0,0,0,0,1,0,0,0,0], 		
                                [0,0,0,0,0,1,0,0,0], 		
                                [0,0,0,0,0,0,1,0,0], 		
                                [0,0,0,0,0,0,0,1,0], 		
                                [0,0,0,0,0,0,0,0,1] 
                            ],	

								
							    //question 5 answer values
                            [	[1,0,0,0,0,0,0,0,0], 		
                                [0,1,0,0,0,0,0,0,0], 		
                                [0,0,1,0,0,0,0,0,0], 		
                                [0,0,0,1,0,0,0,0,0], 		
                                [0,0,0,0,1,0,0,0,0], 		
                                [0,0,0,0,0,1,0,0,0], 		
                                [0,0,0,0,0,0,1,0,0], 		
                                [0,0,0,0,0,0,0,1,0], 		
                                [0,0,0,0,0,0,0,0,1] 
                            ],	

								
							    //question 6 answer values
                            [	[1,0,0,0,0,0,0,0,0], 		
                                [0,1,0,0,0,0,0,0,0], 		
                                [0,0,1,0,0,0,0,0,0], 		
                                [0,0,0,1,0,0,0,0,0], 		
                                [0,0,0,0,1,0,0,0,0], 		
                                [0,0,0,0,0,1,0,0,0], 		
                                [0,0,0,0,0,0,1,0,0], 		
                                [0,0,0,0,0,0,0,1,0], 		
                                [0,0,0,0,0,0,0,0,1] 
                            ],	


								//question 7 answer values
                            [	[1,0,0,0,0,0,0,0,0], 		
                                [0,1,0,0,0,0,0,0,0], 		
                                [0,0,1,0,0,0,0,0,0], 		
                                [0,0,0,1,0,0,0,0,0], 		
                                [0,0,0,0,1,0,0,0,0], 		
                                [0,0,0,0,0,1,0,0,0], 		
                                [0,0,0,0,0,0,1,0,0], 		
                                [0,0,0,0,0,0,0,1,0], 		
                                [0,0,0,0,0,0,0,0,1] 
                            ],	

                                //question 8 answer values
                            [	[1,0,0,0,0,0,0,0,0], 		
                                [0,1,0,0,0,0,0,0,0], 		
                                [0,0,1,0,0,0,0,0,0], 		
                                [0,0,0,1,0,0,0,0,0], 		
                                [0,0,0,0,1,0,0,0,0], 		
                                [0,0,0,0,0,1,0,0,0], 		
                                [0,0,0,0,0,0,1,0,0], 		
                                [0,0,0,0,0,0,0,1,0], 		
                                [0,0,0,0,0,0,0,0,1] 
                            ],	

                                //question 9 answer values
                            [	[1,0,0,0,0,0,0,0,0], 		
                                [0,1,0,0,0,0,0,0,0], 		
                                [0,0,1,0,0,0,0,0,0], 		
                                [0,0,0,1,0,0,0,0,0], 		
                                [0,0,0,0,1,0,0,0,0], 		
                                [0,0,0,0,0,1,0,0,0], 		
                                [0,0,0,0,0,0,1,0,0], 		
                                [0,0,0,0,0,0,0,1,0], 		
                                [0,0,0,0,0,0,0,0,1] 
                            ],	

                                //question 10 answer values
                            [	[1,0,0,0,0,0,0,0,0], 		
                                [0,1,0,0,0,0,0,0,0], 		
                                [0,0,1,0,0,0,0,0,0], 		
                                [0,0,0,1,0,0,0,0,0], 		
                                [0,0,0,0,1,0,0,0,0], 		
                                [0,0,0,0,0,1,0,0,0], 		
                                [0,0,0,0,0,0,1,0,0], 		
                                [0,0,0,0,0,0,0,1,0], 		
                                [0,0,0,0,0,0,0,0,1] 
                            ]	

                        ]
	
	/* SHORTCUT VARIABLES */
	const results = document.getElementById("results");
	const quiz = document.getElementById("quiz");
	const body = document.body.style;
	const printResult = document.getElementById("topScore");
	const buttonElement = document.getElementById("button");
	
	/* QUIZ FUNCTIONALITY */
	buttonElement.addEventListener("click", changeState);	//Add click event listener to main button
	
	/* This function progresses the user through the quiz */
	function changeState() {								
		
		updatePersonality(); 	//Adds the values of the tempStats to the userStats										
		
		if (quizActive) {	
			
			/*True while the user has not reached the end of the quiz */
			
			initText(questionState);	//sets up next question based on user's progress through quiz
			questionState++;			//advances progress through quiz
			
			buttonElement.disabled = true; //disables button until user chooses next answer
			buttonElement.innerHTML = "Please select an answer";			
			buttonElement.style.opacity = 0.7;
			
		} else {
			
			/*All questions answered*/
			setCustomPage(); //runs set up for result page
		}
	}
	
	/* This function determines the question and answer content based on user progress through the quiz */

	function initText(question) {							
		
		let answerSelection = ""; //text variable containting HTML code for the radio buttons' content
		
		/* Creates radio buttons based on user progress through the quiz - current 'id' generation is not w3c compliant*/
		for (i = 0; i < answerText[question].length; i++) {		
			
			answerSelection += "<li><input type='radio' name='question" +
			(question+1) + "' onClick='setAnswer("+i+")' id='" + answerText[question][i] + "'><label for='" + answerText[question][i] + "'>" + answerText[question][i] + "</label></li>";
		}
		
		document.getElementById("questions").innerHTML = questionText[question];	//set question text
		document.getElementById("answers").innerHTML = answerSelection;				//set answer text
	}
	
	/* This function is called when a user selects an answer, NOT when answer is submitted */
	function setAnswer(input) {
				
		clearTempStats();									//clear tempStats in case user reselects their answer
		
		tempStats = answerValues[questionState-1][input];	//selects personality values based on user selection 
				
		if (questionState < questionText.length) {
			
			/*True while the user has not reached the end of the quiz */
			buttonElement.innerHTML = "Continue";
			buttonElement.disabled = false;
			buttonElement.style.opacity = 1;
					
		} else {
			
			/*All questions answered - QUESTION TIME IS OVER!*/
			quizActive = false;
			buttonElement.innerHTML = "Display your dog type"
			buttonElement.disabled = false;
			buttonElement.style.opacity = 1;
		}
	}
	
	/* This function sets tempStats to 0 */
	
	function clearTempStats() {
		
		tempStats = [0,0,0,0,0,0,0,0,0];	
	}
	
	/*This function adds the values of the tempStats to the userStats based on user selection */
	
	function updatePersonality() {
		
		for (i = 0; i < userStats.length ; i++) {
			userStats[i] += tempStats[i];
		}
	}
	
	/* This function determines the highest personality value */
	
	function setCustomPage() {
		
		let highestStatPosition = 0;	//highest stat defaults as 'cute'
		
		/* This statement loops through all personality stats and updates highestStatPosition based on a highest stat */
		
		for (i = 1 ; i < userStats.length; i++) {
			
	
            if (userStats[i] > userStats[highestStatPosition]) {
				highestStatPosition = i;
			}
		}
		
		displayCustomPage(highestStatPosition); //passes the index value of the highest stat discovered
		
		/* Hides the quiz content, shows results content */
		quiz.style.display = "none";		
	}
	
	/* BUILDS WEB PAGE AS PER RESULTS OF THE QUIZ */
	
	/* The following code manipulates the CSS based on the personality results */
			
	function displayCustomPage(personality) {
		switch (personality) {
			
			case 0:	//party dog
				results.style.display = "inline-block";
				results.classList.add("party-dog");
				body.background = "none";
				body.backgroundColor = "#b89832";
                body.backgroundSize = "100% auto";
				printResult.innerText = "party-dog";
				break;
				
			case 1:		//food dog
				results.style.display = "inline-block";
				results.classList.add("food-dog");
				body.background = "none";
				body.backgroundColor = "#b89832";
                body.backgroundSize = "100% auto";
				printResult.innerText = "food-dog";
				break;
				
			case 2:		//fashion dog
				results.style.display = "inline-block";
				results.classList.add("fashion-dog");
				body.background = "none";
				body.backgroundColor = "#b89832";
				printResult.innerText = "fashion-dog";
				break;
				
			case 3:		//surf-dog
				results.style.display = "inline-block";
				results.classList.add("surf-dog");
				body.background = "none";
				body.backgroundColor = "#b89832";
                body.backgroundSize = "100% auto";
				printResult.innerText = "surf-dog";
				break;
				
			case 4:		//dev dog
				results.style.display = "inline-block";
				results.classList.add("dev-dog");
				body.background = "none";
				body.backgroundColor = "#b89832";
                body.backgroundSize = "100% auto";
				printResult.innerText = "dev-dog";
				break;
				
			case 5:		//business dog
				results.style.display = "inline-block";
				results.classList.add("business-dog");
				body.background = "none";
				body.backgroundColor = "#b89832";
                body.backgroundSize = "100% auto";
				printResult.innerText = "business-dog";
				break;
				
			case 6:		//sport dog
				results.style.display = "inline-block";
				results.classList.add("sport-dog");
				body.background = "none";
				body.backgroundColor = "#b89832";
                body.backgroundSize = "100% auto";
				printResult.innerText = "sport-dog";
				break;

            case 7:		//artist dog
				results.style.display = "inline-block";
				results.classList.add("artist-dog");
				body.background = "none";
				body.backgroundColor = "#b89832";
                body.backgroundSize = "100% auto";
				printResult.innerText = "artist-dog";
				break;

            case 8:		//snoop dog
				results.style.display = "inline-block";
				results.classList.add("snoop-dog");
				body.background = "none";
				body.backgroundColor = "#b89832";
                body.backgroundSize = "100% auto";
				printResult.innerText = "snoop-dog";
				break;


                default: 
				document.getElementById("error").style.display = "inline-block";

		}
	}