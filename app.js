const store = {
    allQuestions: [
        {
            question: 'What does FPV stand for?',
            answers: [
                'Fishing Permits Verified',
                'Fantastic Piloting Vehicle',
                'First Person View',
                'Futuristic Plane Vector'
            ],
            correctAnswer: 'First Person View'
        },
        {
            question: 'How do FPV drone pilots control their drones?',
            answers: [
                'With a controller and goggles',
                'With hand tracking and TV output',
                'With a tablet and binoculars',
                'With voice commands'
            ],
            correctAnswer: 'With a controller and goggles'
        },
        {
            question: 'Why does an FPV drone commonly have 2 cameras on it?',
            answers: [
                'One camera for front direction, one camera for back direction',
                'A camera pointing forward for each eye',
                'One camera for left direction, one camera for right direction',
                'One for streaming to goggles, and one for recording HD footage'
            ],
            correctAnswer: 'One for streaming to goggles, and one for recording HD footage'
        },
        {
            question: 'What skills does FPV teach?',
            answers: [
                'Programming skills',
                'Soldering and electronic circuitry skills',
                'Aviation and real world physics demonstrations',
                'All of the above'
            ],
            correctAnswer: 'All of the above'
        },
        {
            question: 'Who is lobbying to limit recreational drone pilots and RC airplane enthusiasts alike so they have a monopoly over drone airspace use?',
            answers: [
                'DJI',
                'Amazon',
                'UPS',
                'The Government'
            ],
            correctAnswer: 'Amazon'
        },
        {
            question: 'Out of these options, where is it illegal to fly your drone without proper permission or permits?',
            answers: [
                'At the park, but check local ordinances',
                'Over bodies of water, but check local ordinances',
                'Over crowds, national parks, within 5 miles of airports',
                'At a mountain range, but check local ordinances'
            ],
            correctAnswer: 'Over crowds, national parks, within 5 miles of airports'
        },
        {
            question: "What can FPV drones do that other drones can't?",
            answers: [
                'Take out the trash',
                'Deliver your food',
                'Freestyle acrobatic tricks',
                'Take your dog for a walk'
            ],
            correctAnswer: 'Freestyle acrobatic tricks'
        }
    ],

    // Creating tracker variables with initialized values
    score: 0,                     //stores current score
    currentQuestionNumber: 0,     //stores which question we're on
    quizStarted: false,           //stores if the quiz has started
    submittingAnswer: false,      //acts as a trigger for the makeQuiz function
    answerArray: [],              //array tracks selected answer and correct answer and if they match

};



/* Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

function generateTitleString() {                      //generates title string
    return `
    <h1>What is FPV?</h1>
    <img src="images/fpv-drone-sizes.jpg" alt="FPV drones of different sizes" class="images">
    <br>
    <button type="button" id="start-quiz" autofocus>Begin</button>`;
}

function generateQuizScreen(currentQuestionObject) {  //argument is currentQuestionObject[i: i + 1, question: store[i]]
    //displays quiz score and progress as well as the current question and a list full of the possible answers
    return `
    <div class="quiz-interface">
        <ul>
            <li>Question: ${currentQuestionObject.i}/${store.allQuestions.length}</li> 
            <li>Score: ${store.score}</li>
        </ul>
        <p>${currentQuestionObject.question.question}</p>
        <form>
            <ol type="A">
              ${generateQuizAnswers(currentQuestionObject.question.answers)}
            </ol>
            <button type="submit" class="submit-answer">Submit Answer</button>
        </form> 
    </div>
    `;

}

function generateQuizAnswers(answers) {               //argument is currentQuestionObject.question.answers
    let answerArray = [];                              //creates array for answers
    let indexArray = [];                               //creates array for indexs
    answers.forEach(answer => {
        answerArray.push(answer);
        indexArray.push(answers.indexOf(answer));
    });
    return answerArray.map(answer => createAnswerString(answer)).join('');
};

function generateAnswerResults() {                    //creates string for answer response page
    const buttons = {                                                     //creating possible buttons for screen
        next: '<button type="submit" class="next-question" autofocus>Next</button>',
        score: '<button type="submit" class="see-score" autofocus>Final Score</button>'
    }
    let finalQuestion = ((store.currentQuestionNumber + 1) === store.allQuestions.length);   //creates variable that checks if it's the last question for button display
    if (store.answerArray[0] === true) {                                        //string for correct response
        return `
        <div class="answer-response">
        <h2>That is correct!</h2>
        <img src="images/fpv-drone-vacation.jpg" alt="This FPV drone is wearing sunglasses" class="images">
        <br>
        <p>Looks like you've got the right stuff!</p>
        ${finalQuestion ? buttons.score : buttons.next}
        </div>
        `
    } else {                                                              //string for incorrect response
        return `
        <div class="answer-response">
        <h2>That is not correct.</h2>
        <img src="images/fpv-drone-broken-gopro.jpg" alt="This FPV drone has a broken GoPro" class="images">
        <br>
        <p>The correct answer is: "${store.answerArray[1]}".</p>
        ${finalQuestion ? buttons.score : buttons.next}
        </div>
        `
    }
}

function createAnswerString(answer) {                 //creates string of answer list
    let name = store.allQuestions[store.currentQuestionNumber].answers.indexOf(answer);  //variable set to recall index number of answer and apply it to the list item
    return `
    <li>
    <div class="answer-container">
    <input type="radio" name="answer" id="answer-${name}" data-answer="${answer}">
    <label for="answer-${name}">${answer}</label>
    </div>
    </li>
    `
}

function generateScoreString() {                      //creates string for score screen
    if (store.score < (store.allQuestions.length / 2)) {              //if fail
        return `
        <h2>Crash!</h2>
        <img src="images/fpv-drone-stuck-in-tree.jpg" alt="This FPV drone is stuck in a tree" class="images">
        <br>
        <p>Your score is ${store.score} out of ${store.allQuestions.length}</p>
        <p>Get your drone out of that tree and try again?</p>
        <button type="button" id="restart-quiz">Try Again</button>
        `
    } else if (store.score < store.allQuestions.length) {             //if passed
        return `
        <h2>You passed!</h2>
        <img src="images/fpv-drone-back.jpg" alt="This FPV drone is ready to go!" class="images">
        <br>
        <p>Your score is ${store.score} out of ${store.allQuestions.length}</p>
        <p>You're getting there, keep practicing!</p>
        <button type="button" id="restart-quiz">Try Again</button>
        `
    } else {                                       //if aced it!
        return `
        <h2>Great job!</h2>
        <img src="images/fpv-drone-sunset.jpg" alt="This FPV drone is on vacation!" class="images">
        <br>
        <p>Your score is ${store.score} out of ${store.allQuestions.length}</p>
        <p>You know FPV!</p>
        <button type="button" id="restart-quiz">Try Again</button>
        `
    }

}

/********** RENDER FUNCTION(S) **********/

function makeQuiz() {                         //displays score or title screen or question screen or submission response 
    if (store.quizStarted === false) {                  //if the quiz has NOT started, do this:
        if (store.currentQuestionNumber === store.allQuestions.length) {  //if currentQ# is totalQ# (aka quiz complete) change main to SCORE SCREEN
            const resultsString = generateScoreString();                  //set const to results of gSS function
            $('main').html(resultsString);                                //change main contents prev const resultsString
        } else if (store.currentQuestionNumber <= store.allQuestions.length) {        //if quiz incomplete (and not started) change main to TITLE SCREEN
            const titleScreenString = generateTitleString();              //set const to function gTS
            $('main').html(titleScreenString);                            //change main contents prev const
        }
    } else if (store.quizStarted === true) {            //if the quiz has started, do this:
        if (store.submittingAnswer === false) {                                      //if not currently submitting an answer change main to QUESTION SCREEN
            const quizInterfaceString = generateQuizScreen(setQuestionObject());      //set const based on generate function running with currentQ# function
            $('main').html(quizInterfaceString);                                           //change main contents prev const
        } else if (store.submittingAnswer === true) {                                //if submitting answer change main to RESPONSE SCREEN
            const quizAnswerResponseString = generateAnswerResults();                      //set const to function gAR
            $('main').html(quizAnswerResponseString);                                      //change main contents prev const
        }
    }
}

function startQuiz() {                        //starts quizStarted tracker
    store.quizStarted = true;
}

function setQuestionObject() {                //returns questionobject array [i: i + 1, question: store[i]]
    let i = store.currentQuestionNumber;
    let currentQuestionObject = store.allQuestions[i];     //sets the string for current question to value from array based on current question number
    return {
        i: i + 1,
        question: currentQuestionObject
    };

}

function nextQuestion() {                     //advances quiz to next question
    if (store.currentQuestionNumber < store.allQuestions.length) {             //if cQN is less than questions amount
        store.currentQuestionNumber++;                                  //cQN + 1
        store.submittingAnswer = false;                                 //reset submitting answer
    } else if (store.currentQuestionNumber === store.allQuestions.length) {    //if cQN is questions amount
        store.quizStarted = false;                                      //reset quizStarted tracker
    }
}

function checkCorrectAnswer() {               //checks which answer was selected and compares to correct answer
    let radios = $('input:radio[name=answer]');
    let selectedAnswer = $('input[name="answer"]:checked').data('answer');   //creates a variable with the selected answer
    let correctAnswer = store.allQuestions[store.currentQuestionNumber].correctAnswer;          //creates a variable with the correct answer
    if (radios.filter(':checked').length === 0) {         //if no answer has been selected
        alert('You must pick one!');                            //alert user to make selection
        return;                                                 //end script
    } else {                                              //if answer has been selected
        store.submittingAnswer = true;                                //set submitting tracker to true
        if (selectedAnswer === correctAnswer) {                 //if answer is correct
            store.score++;                                                     //add 1 to score
            store.answerArray = [true, correctAnswer, selectedAnswer];         //set answer array
        } else {                                                //if incorrect
            store.answerArray = [false, correctAnswer, selectedAnswer];        //set answer array
        }

    }

}

function seeScore() {                         //sets trackers appropriately to trigger score screen
    store.quizStarted = false;
    store.currentQuestionNumber++;

}

function restartQuiz() {                      //initializes tracker values
    store.currentQuestionNumber = 0;
    store.quizStarted = false;
    store.submittingAnswer = false;
    store.answerArray = [];
    store.score = 0;
}

/********** EVENT HANDLER FUNCTIONS **********/

function listenGenerateQuestion() {     //on '#start-quiz' click, starts quizStarted tracker and renders question
    $('main').on('click', '#start-quiz', (event) => {
        event.preventDefault();
        startQuiz();                    //updates quizStarted tracker
        makeQuiz();                     //renders first question
    });
}

function listenSubmitAnswer() {         //on '.submit-answer' click, checks if right and renders response screen
    $('main').on('click', '.submit-answer', (event) => { //listens for click on .submit-answer and runs event
        event.preventDefault();                             //stops default submission
        checkCorrectAnswer();                               //checks if the answer is right
        makeQuiz();                                         //renders submission response screen
    });
}

function listenNextQuestion() {         //on '.next-question' click, increases cQN counter, sets submitting to false, and renders next question
    $('main').on('click', '.next-question', (event) => {   //listens for click on next-question element
        event.preventDefault();          //stops default submission
        nextQuestion();                  //if less than questions length, increases cQN counter, and sets submitting to false
        makeQuiz();                      //renders next question screen based on parameters
    });
}

function listenSeeScore() {             //on '.see-score' click, shows score screen
    $('main').on('click', '.see-score', (event) => { //listens for click on see-results element
        event.preventDefault();         //stops default submission
        seeScore();                     //runs see score to set quizStarted and cQN for makeQuiz to render properly
        makeQuiz();                     //runs make quiz function to show score screen
    });
}

function listenRestartQuiz() {          //on '.restart-quiz' click, initialize trackers and render title screen
    $('main').on('click', '#restart-quiz', (event) => { //listens for a click on restart-quiz element
        event.preventDefault();                              //stops default submission behavior
        restartQuiz();                                       //runs restartQuiz function to initialize trackers
        makeQuiz();                                          //renders title screen
    });
}


function runQuizApp() {
    makeQuiz();                       //render function - displays score or title screen or question screen or submission response
    listenGenerateQuestion();         //listens for click on #start-quiz and shows the first question
    listenSubmitAnswer();             //listens for click on .submit-answer and shows answer response
    listenNextQuestion();             //listens for click on .next-question and shows next question 
    listenSeeScore();                 //listens for click on .see-results and shows score  
    listenRestartQuiz();              //listens for click on .restart-quiz and restarts quiz


}

$(runQuizApp);