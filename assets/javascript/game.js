
let trivia = [
    {
        Question: "Are you READY!!",
        Answers: "click Start when you think you are!"
    },
    {
        Question: "question 1",
        Choices: [
            "Answer A <br>",
            "Answer B <br>",
            "Answer C <br>",
            "Answer D <br>"
        ]

    },
    {
        Question: "question 2",
        Choices: [
            "Answer A <br>",
            "Answer B <br>",
            "Answer C <br>",
            "Answer D <br>"
        ]
    },
    {
        Question: "question 3",
        Choices: [
            "Answer A <br>",
            "Answer B <br>",
            "Answer C <br>",
            "Answer D <br>"
        ]
    }
];
console.log(trivia);

let qNum = 0;

let scoreBox = $(".score-box");
let correct = $("correct");
let wrong = $("#wrong");
let timeClock = $("#time-clock");
let triviaBox = $(".trivia-box");
let question = $("#question");
let choices = $("#choices");
let nextBtn = $("#next-btn");

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