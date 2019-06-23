
let trivia = [

    {
        Question: "Do you really know the best games in the Universe?!",
        Choices: "Begin when you are ready."
    },
    {
        Question: 'What is the first level of "Halo: Combat Evolved" called?',
        Choices: {
            a: "343 Guilty Spark",
            b: "Sierra 117",
            c: "The Pillar of Autumn",
            d: "Prologue"
        },
        answer: "b"
    },
    {
        Question: 'What is the Installation number of "The Ark"?',
        Choices: {
            a: "Installation 04",
            b: "Installation 00",
            c: "Installation 05",
            d: "Installation 01"
        },
        answer: "b"
    },
    {
        Question: 'Where is the portal to "The Ark" located?',
        Choices: {
            a: "Europe",
            b: "Asia",
            c: "America",
            d: "Africa"
        },
        answer: "b"
    },
    {
        Question: 'How many main types of Flood are there in "Halo 3"?',
        Choices: {
            a: "Two",
            b: "Three",
            c: "Four",
            d: "Five"
        },
        answer: "b"
    },
    {
        Question: 'How many main types of Flood are there in "Halo 3"?',
        Choices: {
            a: "Two",
            b: "Three",
            c: "Four",
            d: "Five"
        },
        answer: "b"
    },
    {
        Question: 'How many main types of Flood are there in "Halo 3"?',
        Choices: {
            a: "Two",
            b: "Three",
            c: "Four",
            d: "Five"
        },
        answer: "b"
    },
    {
        Question: 'How many main types of Flood are there in "Halo 3"?',
        Choices: {
            a: "Two",
            b: "Three",
            c: "Four",
            d: "Five"
        },
        answer: "b"
    },
    {
        Question: 'How many main types of Flood are there in "Halo 3"?',
        Choices: {
            a: "Two",
            b: "Three",
            c: "Four",
            d: "Five"
        },
        answer: "b"
    },
    {
        Question: 'How many main types of Flood are there in "Halo 3"?',
        Choices: {
            a: "Two",
            b: "Three",
            c: "Four",
            d: "Five"
        },
        answer: "b"
    },
    {
        Question: 'How many main types of Flood are there in "Halo 3"?',
        Choices: {
            a: "Two",
            b: "Three",
            c: "Four",
            d: "Five"
        },
        answer: "b"
    }
];
console.log(trivia);

let qNum = 0;

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

}

function nextButton() {
    nextBtn.on("click", function () {
        qNum++;
        writeTrivia();
    });
}

function triviaInit() {
    writeTrivia();
    nextButton();
}

triviaInit();