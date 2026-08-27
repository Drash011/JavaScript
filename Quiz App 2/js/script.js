const questions = [{
        category: "HTML",
        question: "Which HTML element is used to create a hyperlink?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        answer: 1
    },
    {
        category: "HTML",
        question: "Which HTML element defines the largest heading?",
        options: [
            "<heading>",
            "<h6>",
            "<h1>",
            "<head>"
        ],
        answer: 2
    },
    {
        category: "HTML",
        question: "Which attribute provides alternative text for an image?",
        options: [
            "title",
            "src",
            "alt",
            "text"
        ],
        answer: 2
    },
    {
        category: "HTML",
        question: "Which element creates an ordered list?",
        options: [
            "<ul>",
            "<ol>",
            "<li>",
            "<list>"
        ],
        answer: 1
    },
    {
        category: "HTML",
        question: "Which element is used to create an HTML form?",
        options: [
            "<input>",
            "<form>",
            "<fieldset>",
            "<data>"
        ],
        answer: 1
    },
    {
        category: "HTML",
        question: "Which element is used to insert an image?",
        options: [
            "<image>",
            "<picture>",
            "<img>",
            "<src>"
        ],
        answer: 2
    },
    {
        category: "HTML",
        question: "Which attribute specifies the destination of a hyperlink?",
        options: [
            "src",
            "href",
            "link",
            "target"
        ],
        answer: 1
    },
    {
        category: "HTML",
        question: "Which HTML element represents a table row?",
        options: [
            "<td>",
            "<th>",
            "<tr>",
            "<row>"
        ],
        answer: 2
    },
    {
        category: "HTML",
        question: "Which element is used for an unordered list?",
        options: [
            "<ol>",
            "<ul>",
            "<li>",
            "<list>"
        ],
        answer: 1
    },
    {
        category: "HTML",
        question: "Which HTML element is used to create a line break?",
        options: [
            "<break>",
            "<lb>",
            "<br>",
            "<newline>"
        ],
        answer: 2
    },
    {
        category: "CSS",
        question: "Which CSS property changes the text color?",
        options: [
            "font-color",
            "text-color",
            "color",
            "foreground"
        ],
        answer: 2
    },
    {
        category: "CSS",
        question: "Which property makes text bold?",
        options: [
            "font-weight",
            "font-style",
            "text-bold",
            "font-bold"
        ],
        answer: 0
    },
    {
        category: "CSS",
        question: "Which layout system is mainly designed for one-dimensional layouts?",
        options: [
            "Grid",
            "Flexbox",
            "Float",
            "Position"
        ],
        answer: 1
    },
    {
        category: "CSS",
        question: "Which property controls the space inside an element?",
        options: [
            "margin",
            "padding",
            "spacing",
            "border"
        ],
        answer: 1
    },
    {
        category: "CSS",
        question: "Which property controls the space outside an element?",
        options: [
            "padding",
            "spacing",
            "margin",
            "border"
        ],
        answer: 2
    },
    {
        category: "CSS",
        question: "Which property changes the background color?",
        options: [
            "bg-color",
            "background-color",
            "background",
            "color-background"
        ],
        answer: 1
    },
    {
        category: "CSS",
        question: "Which CSS property changes the font size?",
        options: [
            "font-size",
            "text-size",
            "size",
            "font-height"
        ],
        answer: 0
    },
    {
        category: "CSS",
        question: "Which property is used to create rounded corners?",
        options: [
            "corner-radius",
            "border-radius",
            "radius",
            "round-border"
        ],
        answer: 1
    },
    {
        category: "CSS",
        question: "Which property changes the transparency of an element?",
        options: [
            "transparent",
            "visibility",
            "opacity",
            "alpha"
        ],
        answer: 2
    },
    {
        category: "CSS",
        question: "Which property controls the stacking order?",
        options: [
            "stack",
            "z-index",
            "layer",
            "position-index"
        ],
        answer: 1
    },
    {
        category: "JavaScript",
        question: "Which keyword declares a block-scoped variable?",
        options: [
            "var",
            "let",
            "define",
            "variable"
        ],
        answer: 1
    },
    {
        category: "JavaScript",
        question: "Which method selects an element using its ID?",
        options: [
            "querySelector()",
            "getElementById()",
            "getElement()",
            "selectById()"
        ],
        answer: 1
    },
    {
        category: "JavaScript",
        question: "Which method attaches an event listener?",
        options: [
            "addEvent()",
            "eventListener()",
            "addEventListener()",
            "attachEventHandler()"
        ],
        answer: 2
    },
    {
        category: "JavaScript",
        question: "What does the === operator compare?",
        options: [
            "Only value",
            "Only type",
            "Value and type",
            "Objects only"
        ],
        answer: 2
    },
    {
        category: "JavaScript",
        question: "Which method converts JSON text into a JavaScript object?",
        options: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.convert()",
            "JSON.object()"
        ],
        answer: 0
    },
    {
        category: "JavaScript",
        question: "Which method converts an object into JSON text?",
        options: [
            "JSON.parse()",
            "JSON.object()",
            "JSON.stringify()",
            "JSON.convert()"
        ],
        answer: 2
    },
    {
        category: "JavaScript",
        question: "Which array method adds an element to the end?",
        options: [
            "push()",
            "pop()",
            "shift()",
            "add()"
        ],
        answer: 0
    },
    {
        category: "JavaScript",
        question: "Which array method removes the last element?",
        options: [
            "remove()",
            "pop()",
            "shift()",
            "delete()"
        ],
        answer: 1
    },
    {
        category: "JavaScript",
        question: "Which keyword is used to declare a constant?",
        options: [
            "constant",
            "let",
            "const",
            "fixed"
        ],
        answer: 2
    },
    {
        category: "JavaScript",
        question: "Which method selects the first matching CSS selector?",
        options: [
            "querySelector()",
            "querySelectorAll()",
            "getSelector()",
            "select()"
        ],
        answer: 0
    }
];

let currentQuestion = 0;
let answers = new Array(questions.length).fill(null);
let timeLeft = 59;
let timerInterval;

const questionEl = document.getElementById("question");
const categoryEl = document.getElementById("category");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");
const timerBox = document.getElementById("timerBox");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const bottomNumber = document.getElementById("bottomNumber");
const sidebarCount = document.getElementById("sidebarCount");
const questionGrid = document.getElementById("questionGrid");
const completeModal = document.getElementById("completeModal");
const quizScreen = document.getElementById("quizScreen");
const reviewScreen = document.getElementById("reviewScreen");

function createQuestionNavigation() {
    questionGrid.innerHTML = "";

    questions.forEach((_, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "q-number";
        button.textContent = index + 1;

        questionGrid.appendChild(button);
    });
}

function updateQuestionNavigation() {
    const buttons = document.querySelectorAll(".q-number");

    buttons.forEach((button, index) => {
        button.classList.remove("current", "answered");

        if (answers[index] !== null) {
            button.classList.add("answered");
        }

        if (index === currentQuestion) {
            button.classList.add("current");
        }
    });
}

function loadQuestion() {
    clearInterval(timerInterval);

    timeLeft = 59;

    timerBox.classList.remove("warning");

    updateTimer();

    const question = questions[currentQuestion];

    categoryEl.textContent = question.category;
    questionEl.textContent = question.question;

    optionsEl.innerHTML = "";

    question.options.forEach((option, index) => {
        const wrapper = document.createElement("div");

        wrapper.className = "option";

        const input = document.createElement("input");

        input.type = "radio";
        input.name = "answer";
        input.id = `answer-${currentQuestion}-${index}`;
        input.value = index;
        input.checked = answers[currentQuestion] === index;

        input.addEventListener("change", () => {
            answers[currentQuestion] = Number(input.value);

            updateQuestionNavigation();
        });

        const label = document.createElement("label");

        label.htmlFor = input.id;

        const letter = document.createElement("span");

        letter.className = "option-letter";
        letter.textContent = String.fromCharCode(65 + index);

        const text = document.createElement("span");

        text.className = "option-text";
        text.textContent = option;

        label.append(letter, text);
        wrapper.append(input, label);

        optionsEl.appendChild(wrapper);
    });

    const progress = ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width = `${progress}%`;

    bottomNumber.textContent =
        `${currentQuestion + 1} of ${questions.length}`;

    sidebarCount.textContent =
        `${currentQuestion + 1} / ${questions.length}`;

    nextBtn.textContent =
        currentQuestion === questions.length - 1 ?
        "Submit Quiz ✓" :
        "Next Question →";

    updateQuestionNavigation();
    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);

            nextQuestion();
        }
    }, 1000);
}

function updateTimer() {
    timerEl.textContent = timeLeft;

    timerBox.classList.toggle(
        "warning",
        timeLeft <= 10
    );
}

function nextQuestion() {
    clearInterval(timerInterval);

    if (currentQuestion === questions.length - 1) {
        showCompleteModal();

        return;
    }

    currentQuestion++;

    loadQuestion();
}

function calculateResult() {
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    questions.forEach((question, index) => {
        if (answers[index] === null) {
            unanswered++;
        } else if (answers[index] === question.answer) {
            correct++;
        } else {
            wrong++;
        }
    });

    return {
        correct,
        wrong,
        unanswered
    };
}

function showCompleteModal() {
    clearInterval(timerInterval);

    const result = calculateResult();

    document.getElementById("modalScore").textContent =
        `${result.correct}/${questions.length}`;

    document.getElementById("modalCorrect").textContent =
        result.correct;

    document.getElementById("modalWrong").textContent =
        result.wrong;

    completeModal.classList.add("show");
}

function createReview() {
    const result = calculateResult();

    document.getElementById("reviewScore").textContent =
        `${result.correct}/${questions.length}`;

    document.getElementById("reviewCorrect").textContent =
        result.correct;

    document.getElementById("reviewWrong").textContent =
        result.wrong;

    document.getElementById("reviewUnanswered").textContent =
        result.unanswered;

    const reviewList =
        document.getElementById("reviewList");

    reviewList.innerHTML = "";

    questions.forEach((question, index) => {
        const userAnswer = answers[index];

        let status = "unanswered";
        let statusText = "Unanswered";

        if (
            userAnswer !== null &&
            userAnswer === question.answer
        ) {
            status = "correct";
            statusText = "Correct";
        } else if (userAnswer !== null) {
            status = "wrong";
            statusText = "Wrong";
        }

        const item = document.createElement("div");

        item.className = `review-item ${status}`;

        const top = document.createElement("div");

        top.className = "review-q-top";

        const number = document.createElement("span");

        number.className = "review-q-number";
        number.textContent =
            `Question ${index + 1} • ${question.category}`;

        const badge = document.createElement("span");

        badge.className = `status ${status}`;
        badge.textContent = statusText;

        top.append(number, badge);

        const questionText =
            document.createElement("div");

        questionText.className = "review-question";
        questionText.textContent = question.question;

        const answerRow =
            document.createElement("div");

        answerRow.className = "answer-row";

        const yourBox =
            document.createElement("div");

        yourBox.className = "answer-box";

        const yourLabel =
            document.createElement("span");

        yourLabel.textContent = "Your Answer";

        const yourText =
            document.createElement("strong");

        yourText.textContent =
            userAnswer === null ?
            "Not Answered" :
            `${String.fromCharCode(65 + userAnswer)}. ${question.options[userAnswer]}`;

        yourBox.append(yourLabel, yourText);

        const correctBox =
            document.createElement("div");

        correctBox.className = "answer-box";

        const correctLabel =
            document.createElement("span");

        correctLabel.textContent = "Correct Answer";

        const correctText =
            document.createElement("strong");

        correctText.textContent =
            `${String.fromCharCode(65 + question.answer)}. ${question.options[question.answer]}`;

        correctBox.append(
            correctLabel,
            correctText
        );

        answerRow.append(
            yourBox,
            correctBox
        );

        item.append(
            top,
            questionText,
            answerRow
        );

        reviewList.appendChild(item);
    });
}

function restartQuiz() {
    clearInterval(timerInterval);

    currentQuestion = 0;

    answers = new Array(
        questions.length
    ).fill(null);

    completeModal.classList.remove("show");

    reviewScreen.style.display = "none";
    quizScreen.style.display = "grid";

    createQuestionNavigation();
    loadQuestion();
}

nextBtn.addEventListener(
    "click",
    nextQuestion
);

document.getElementById("reviewBtn")
    .addEventListener("click", () => {
        completeModal.classList.remove("show");

        quizScreen.style.display = "none";
        reviewScreen.style.display = "block";

        createReview();
    });

document.getElementById("tryBtn")
    .addEventListener(
        "click",
        restartQuiz
    );

document.getElementById("reviewRestart")
    .addEventListener(
        "click",
        restartQuiz
    );

createQuestionNavigation();
loadQuestion();