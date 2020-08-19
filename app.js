// questions
const STORE = [
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
  },


];

let quizStarted = false;
let questionNumber = 0;
let score = 0;

/**
 *
 * Technical requirements:
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

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)