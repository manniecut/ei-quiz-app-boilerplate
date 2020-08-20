const store = [
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
];


// Creating tracker variables with initialized values

let score = 0;                     //stores current score
let currentQuestionNumber = 0;     //stores which question we're on
let quizStarted = false;           //stores if the quiz has started
let submittingAnswer = false;      //checks if current answer has been submitted

let answerArray = [];       //array tracks selected answer and correct answer


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

function generateTitleString() {              //generates title string
    return `
    <h1>What is FPV?</h1>
    <img src="images/fpv-drone-sizes.jpg" alt="FPV drones of different sizes" class="images">
    <br>
    <button type="button" id="start-quiz" autofocus>Begin</button>`;
}

function generateQuizInterface(currentQuestionObject) {  // argument is store[i].question
    return `
    <div class='quiz-interface'>
        
        <p>Question ${currentQuestionObject.i} out of ${store.length}</p>
       
        <p>${currentQuestionObject.question}</p>
        
        <form>
            <ol type="A">
              ${generateQuizAnswers(store[currentQuestionObject.i].answers)}
            </ol>
            <button type="submit" class="submit-answer">Submit Answer</button>
        </form> 
       
        <p>Score: ${score}</p>
    </div>
    `            //first p is question counter using 

}

function generateAnswerResults() {
    

}

function generateQuizAnswers(answers) {     //argument is store[i].answers
    let answerArray = [];
    let indexArray = [];
    answers.forEach(answer => {
        answerArray.push(answer);
        indexArray.push(answers.indexOf(answer));
    });
    console.log(indexArray);
    return answerArray.map(answer => stringifyAnswerArray(answer)).join('');
};


function stringifyAnswerArray(answer){

  }

function generateScoreString() {

}

function generateImage() {

}

/********** RENDER FUNCTION(S) **********/

function makeQuiz() {                         //displays score or title screen or question screen or submission response 
    if (quizStarted === false) {                  //if the quiz has NOT started, do this:
        if (currentQuestionNumber === store.length) {  //if currentQ# is totalQ# (aka quiz complete) change main to SCORE SCREEN
            const resultsString = generateScoreString();                  //set const to results of gSS function
            const finalImage = generateImage();                           //set const to results of gI function
            $('main').html(resultsString);                                //change main contents prev const resultsString
        } else if (currentQuestionNumber < store.length) {        //if quiz incomplete (and not started) change main to TITLE SCREEN
            const titleScreenString = generateTitleString();              //set const to function gTS
            $('main').html(titleScreenString);                            //change main contents prev const
        }
    } else if (quizStarted === true) {            //if the quiz has started, do this:
        if (submittingAnswer === false) {                                      //if not currently submitting an answer change main to QUESTION SCREEN
            const quizInterfaceString = generateQuizInterface(setQuestionObject());      //set const based on generate function running with currentQ# function
            $('main').html(quizInterfaceString);                                           //change main contents prev const
        } else if (submittingAnswer === true) {                                //if submitting answer change main to RESPONSE SCREEN
            const quizAnswerResponseString = generateAnswerResults();                      //set const to function gAR
            $('main').html(quizAnswerResponseString);                                      //change main contents prev const
        }
    }
}

function startQuiz() {   //starts quizStarted tracker
    quizStarted = true;
}

// returns an object with an updated question number and the current question
function setQuestionObject() {
    let i = currentQuestionNumber;
    let currentQuestionObject = store[i];   //sets the string for current question to value from array based on current question number
    return {
        i: i + 1,
        question: currentQuestionObject

    };

}

function nextQuestion() {

}

function checkCorrectAnswer() {

}

function seeScore() {

}

function restartQuiz() {

}

/********** EVENT HANDLER FUNCTIONS **********/

function listenGenerateQuestion() {     //on '.start-quiz' click, starts quizStarted tracker and renders question
    $('main').on('click', '#start-quiz', (event) => {
        event.preventDefault();
        startQuiz();                    //updates quizStarted tracker
        makeQuiz();                     //renders first question
    });
}

function listenSubmitAnswer() {         //on '.submit-answer' click, checks if right and renders response screen
    $('main').on('click', '.submit-answer', (event) => { //listens for click on .submit-answer and runs event
        event.preventDefault();                //stops default submission
        checkCorrectAnswer();                  //checks if the answer is right
        makeQuiz();                            //renders submission response screen
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
    $('main').on('click', '.restart-quiz', (event) => { //listens for a click on restart-quiz element
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
