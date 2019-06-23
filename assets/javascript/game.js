
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
        answer: "b"
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
        answer: "b"
    },
    {
        Question: 'How many main types of Flood are there in "Halo 3"?',
        Choices: [
            "<button id='a'>Two</button>",
            "<button id='b'>Three</button>",
            "<button id='c'>Four</button>",
            "<button id='d'>Five</button>"
        ],
        answer: "b"
    },
    {
        Question: 'How many main types of Flood are there in "Halo 3"?',
        Choices: [
            "<button id='a'>a</button>",
            "<button id='b'>b</button>",
            "<button id='c'>c</button>",
            "<button id='d'>d</button>"
        ],
        answer: "b"
    },
    {
        Question: 'How many main types of Flood are there in "Halo 3"?',
        Choices: [
            "<button id='a'>a</button>",
            "<button id='b'>b</button>",
            "<button id='c'>c</button>",
            "<button id='d'>d</button>"
        ],
        answer: "b"
    },
    {
        Question: 'How many main types of Flood are there in "Halo 3"?',
        Choices: [
            "<button id='a'>a</button>",
            "<button id='b'>b</button>",
            "<button id='c'>c</button>",
            "<button id='d'>d</button>"
        ],
        answer: "b"
    },
    {
        Question: 'How many main types of Flood are there in "Halo 3"?',
        Choices: [
            "<button id='a'>a</button>",
            "<button id='b'>b</button>",
            "<button id='c'>c</button>",
            "<button id='d'>d</button>"
        ],
        answer: "b"
    },
    {
        Question: 'How many main types of Flood are there in "Halo 3"?',
        Choices: [
            "<button id='a'>a</button>",
            "<button id='b'>b</button>",
            "<button id='c'>c</button>",
            "<button id='d'>d</button>"
        ],
        answer: "b"
    },
    {
        Question: 'How many main types of Flood are there in "Halo 3"?',
        Choices: [
            "<button id='a'>a</button>",
            "<button id='b'>b</button>",
            "<button id='c'>c</button>",
            "<button id='d'>d</button>"
        ],
        answer: "b"
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
            "and " + wrongCount + " blasphemies");
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
    if (qNum !== 0 || qnum < trivia.length) {
        timeCount = setInterval(answerCheck, 10000);
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
    } else {
        if (choice === correctAns) {
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