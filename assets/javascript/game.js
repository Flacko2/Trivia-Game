
let trivia = [

    {
        Question: "Do you really know the best games in the Universe?!",
        Choices: "Begin when you are ready."
    },
    {
        Question: 'What is the first level of "Halo: Combat Evolved" called?',
        Choices: [
            "<button id='a'>343 Guilty Spark</button>",
            "<button id='b'>Sierra 117</button>",
            "<button id='c'>The Pillar of Autumn</button>",
            "<button id='d'>Prologue</button>"
        ],
        answer: "c"
    },
    {
        Question: 'What is the Installation number of "The Ark"?',
        Choices: [
            "<button id='a'>Installation 04</button>",
            "<button id='b'>Installation 00</button>",
            "<button id='c'>Installation 05</button>",
            "<button id='d'>Installation 01</button>"
        ],
        answer: "b"
    },
    {
        Question: 'Where is the portal to "The Ark" located?',
        Choices: [
            "<button id='a'>Europe</button>",
            "<button id='b'>Asia</button>",
            "<button id='c'>America</button>",
            "<button id='d'>Africa</button>"
        ],
        answer: "d"
    },
    {
        Question: 'How many main types of Flood are there in "Halo 3"?',
        Choices: [
            "<button id='a'>Two</button>",
            "<button id='b'>Three</button>",
            "<button id='c'>Four</button>",
            "<button id='d'>Five</button>"
        ],
        answer: "c"
    },
    {
        Question: 'What is the purpose of the Halo installations?',
        Choices: [
            "<button id='a'>To kill the flood</button>",
            "<button id='b'>To provide homes to the Forerunners</button>",
            "<button id='c'>To start the Great Journey</button>",
            "<button id='d'>To eliminate the Flood's food source (all sentient life)</button>"
        ],
        answer: "d"
    },
    {
        Question: 'Who is the monitor of Installation 05?',
        Choices: [
            "<button id='a'>2401 Penitent Tangent</button>",
            "<button id='b'>Medicant Bias</button>",
            "<button id='c'>343 Guilty Spark</button>",
            "<button id='d'>Offensive Bias</button>"
        ],
        answer: "a"
    },
    {
        Question: ' What is the name of the ship that you use to escape from The Pillar of Autumn in "Halo: Combat Evolved"?',
        Choices: [
            "<button id='a'>Longsword</button>",
            "<button id='b'>Pelican</button>",
            "<button id='c'>Warthog</button>",
            "<button id='d'>Spirit Dropship</button>"
        ],
        answer: "b"
    },
    {
        Question: 'What is the Arbiter\'s name?',
        Choices: [
            "<button id='a'>Igido Nosa Fasu</button>",
            "<button id='b'>Thel 'Vadam</button>",
            "<button id='c'>Usze 'Taham</button>",
            "<button id='d'>Rtas 'Vadum</button>"
        ],
        answer: "b"
    },
    {
        Question: 'What is the reason that the Arbiter is punished in the beginning of "Halo 2"?',
        Choices: [
            "<button id='a'>Blamed for being a heretic</button>",
            "<button id='b'>Killed his own men</button>",
            "<button id='c'>Brought the Master Chief with him</button>",
            "<button id='d'>Was actually a Grunt</button>"
        ],
        answer: "a"
    },
    {
        Question: '"No, I think we\'re just getting started." This is the last line of which game?',
        Choices: [
            "<button id='a'>Halo: Reach</button>",
            "<button id='b'>Halo 3</button>",
            "<button id='c'>Halo: Combat Evolved</button>",
            "<button id='d'>Halo Wars</button>"
        ],
        answer: "c"
    }
];
console.log(trivia);

let qNum = 0;
let correctAns = "";
let choice = "";
let correctCount = 0;
let wrongCount = 0;
let timeCount;

const scoreBox = $(".score-box");
const correct = $("correct");
const wrong = $("#wrong");
const timeClock = $("#time-clock");
const triviaBox = $(".trivia-box");
const question = $("#question");
const choices = $("#choices");
const nextBtn = $("#next-btn");


function writeTrivia() {

    if (qNum < trivia.length) {
        question.html(trivia[qNum].Question);
        choices.html(trivia[qNum].Choices);
    } else {
        question.html("You've completed the quiz! How'd ya do???")
        choices.html("You've gotten " + correctCount + " correct<br>" +
            "and " + wrongCount + " blasphemies to your name");
    }
    correctAns = trivia[qNum].answer;
    console.log(correctAns);
}

function answerSelect(x) {
    choice = x;
    console.log(choice);
}
function resetTimer() {
    clearInterval(timeCount);
}
function timer() {
    if (qNum !== 0 || qNum < trivia.length) {
        timeCount = setInterval(answerCheck, 10000);
    } else if (qNum >= trivia.length){
        resetTimer();
    }
}

function answerBtns() {
    a.setAttribute("onclick", "answerSelect(this.id)");
    b.setAttribute("onclick", "answerSelect(this.id)");
    c.setAttribute("onclick", "answerSelect(this.id)");
    d.setAttribute("onclick", "answerSelect(this.id)");

}
function nextQuestion() {
    qNum++;
    writeTrivia();
    answerBtns();
    choice = "";
}

function answerCheck() {
    if (qNum === 0) {
        nextQuestion();
    } else if (qNum < trivia.length){
        if (choice === correctAns) {
            alert("Ahhh yeah, baby! You got it right!");
            correctCount++;
            console.log(correctCount);
            nextQuestion();
            resetTimer();
            timer();
        }
        else if (choice === "") {
            alert("Failed to answer... smh");
            wrongCount++;
            console.log(wrongCount);
            nextQuestion();
            resetTimer();
            timer();
        }
        else {
            alert("Wrong answer... dissapointing");
            wrongCount++;
            console.log(wrongCount);
            nextQuestion();
            resetTimer();
            timer();
        }
    }
}

function nextButton() {
    nextBtn.on("click", function () {
        answerCheck();
        // resetTimer();
        // timer();
    });
}

function triviaInit() {
    writeTrivia();
    nextButton();
}

triviaInit();