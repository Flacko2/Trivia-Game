
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
            "<button id='a'></button>",
            "<button id='b'></button>",
            "<button id='c'></button>",
            "<button id='d'></button>"
        ],
        answer: "b"
    },
    {
        Question: 'How many main types of Flood are there in "Halo 3"?',
        Choices: [
            "<button id='a'></button>",
            "<button id='b'></button>",
            "<button id='c'></button>",
            "<button id='d'></button>"
        ],
        answer: "b"
    },
    {
        Question: 'How many main types of Flood are there in "Halo 3"?',
        Choices: [
            "<button id='a'></button>",
            "<button id='b'></button>",
            "<button id='c'></button>",
            "<button id='d'></button>"
        ],
        answer: "b"
    },
    {
        Question: 'How many main types of Flood are there in "Halo 3"?',
        Choices: [
            "<button id='a'></button>",
            "<button id='b'></button>",
            "<button id='c'></button>",
            "<button id='d'></button>"
        ],
        answer: "b"
    },
    {
        Question: 'How many main types of Flood are there in "Halo 3"?',
        Choices: [
            "<button id='a'></button>",
            "<button id='b'></button>",
            "<button id='c'></button>",
            "<button id='d'></button>"
        ],
        answer: "b"
    },
    {
        Question: 'How many main types of Flood are there in "Halo 3"?',
        Choices: [
            "<button id='a'></button>",
            "<button id='b'></button>",
            "<button id='c'></button>",
            "<button id='d'></button>"
        ],
        answer: "b"
    }
];
console.log(trivia);

let qNum = 0;
let correctAns = "";
let choice = "";

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
    }
    correctAns = trivia[qNum].answer;
    console.log(correctAns);
}

function answerCheck(Element) {
    console.log(this);
}

function answerBtns() {
    a.setAttribute("onclick", "answerCheck()");
    b.setAttribute("onclick", "answerCheck()");
    c.setAttribute("onclick", "answerCheck()");
    d.setAttribute("onclick", "answerCheck()");
}

function nextButton() {
    nextBtn.on("click", function () {
        qNum++;
        writeTrivia();
        answerBtns();
    });
}

function triviaInit() {
    writeTrivia();
    nextButton();
}

triviaInit();