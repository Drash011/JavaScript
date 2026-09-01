const allQuestion = [{
    category: "HTML",
    icon: "fa-brands fa-html5",
    question: "Which HTML element is used to create a hyperlink?",
    option: ["link", "a", "href", "url"],
    answer: 1
}, {
    category: "HTML",
    icon: "fa-brands fa-html5",
    question: "Which HTML element is used to display an image?",
    option: ["image", "img", "picture", "src"],
    answer: 1
}, {
    category: "HTML",
    icon: "fa-brands fa-html5",
    question: "Which attribute provides alternative text for an image?",
    option: ["title", "src", "alt", "text"],
    answer: 2
}, {
    category: "HTML",
    icon: "fa-brands fa-html5",
    question: "Which element is used to create an unordered list?",
    option: ["ol", "list", "ul", "li"],
    answer: 2
}, {
    category: "HTML",
    icon: "fa-brands fa-html5",
    question: "Which element is used to create a table row?",
    option: ["td", "tr", "th", "row"],
    answer: 1
}, {
    category: "HTML",
    icon: "fa-brands fa-html5",
    question: "Which element is generally used for the main heading of a page?",
    option: ["h1", "head", "heading", "title"],
    answer: 0
}, {
    category: "HTML",
    icon: "fa-brands fa-html5",
    question: "Which HTML element is used to create a form?",
    option: ["input", "form", "fieldset", "data"],
    answer: 1
}, {
    category: "HTML",
    icon: "fa-brands fa-html5",
    question: "Which input type allows the user to select only one option from a group?",
    option: ["checkbox", "select", "radio", "option"],
    answer: 2
}, {
    category: "HTML",
    icon: "fa-brands fa-html5",
    question: "Which semantic HTML element is commonly used for navigation links?",
    option: ["navigate", "navigation", "nav", "links"],
    answer: 2
}, {
    category: "HTML",
    icon: "fa-brands fa-html5",
    question: "Which HTML element is used to create a dropdown list?",
    option: ["dropdown", "select", "option", "list"],
    answer: 1
}, {
    category: "CSS",
    icon: "fa-brands fa-css3-alt",
    question: "Which CSS property is used to change the text color?",
    option: ["font-color", "text-color", "color", "foreground"],
    answer: 2
}, {
    category: "CSS",
    icon: "fa-brands fa-css3-alt",
    question: "Which property is used to change the background color?",
    option: ["background-color", "bg-color", "background-style", "color-background"],
    answer: 0
}, {
    category: "CSS",
    icon: "fa-brands fa-css3-alt",
    question: "Which property controls the space inside an element's border?",
    option: ["margin", "padding", "spacing", "border-space"],
    answer: 1
}, {
    category: "CSS",
    icon: "fa-brands fa-css3-alt",
    question: "Which property controls the space outside an element's border?",
    option: ["padding", "spacing", "margin", "outside"],
    answer: 2
}, {
    category: "CSS",
    icon: "fa-brands fa-css3-alt",
    question: "Which declaration makes an element a flex container?",
    option: ["flex: true", "display: flex", "position: flex", "layout: flex"],
    answer: 1
}, {
    category: "CSS",
    icon: "fa-brands fa-css3-alt",
    question: "Which property is used to control the thickness of text?",
    option: ["font-style", "text-weight", "font-weight", "text-bold"],
    answer: 2
}, {
    category: "CSS",
    icon: "fa-brands fa-css3-alt",
    question: "Which position value keeps an element fixed relative to the viewport?",
    option: ["absolute", "relative", "sticky", "fixed"],
    answer: 3
}, {
    category: "CSS",
    icon: "fa-brands fa-css3-alt",
    question: "Which CSS unit is relative to the root element's font size?",
    option: ["em", "rem", "px", "vh"],
    answer: 1
}, {
    category: "CSS",
    icon: "fa-brands fa-css3-alt",
    question: "Which property is used to create rounded corners?",
    option: ["corner-radius", "border-round", "border-radius", "radius"],
    answer: 2
}, {
    category: "CSS",
    icon: "fa-brands fa-css3-alt",
    question: "Which CSS layout system is designed for two-dimensional layouts?",
    option: ["Flexbox", "Grid", "Float", "Inline"],
    answer: 1
}, {
    category: "JavaScript",
    icon: "fa-brands fa-js",
    question: "Which keyword is used to declare a block-scoped variable?",
    option: ["var", "let", "define", "variable"],
    answer: 1
}, {
    category: "JavaScript",
    icon: "fa-brands fa-js",
    question: "Which keyword is used to declare a constant?",
    option: ["constant", "let", "const", "static"],
    answer: 2
}, {
    category: "JavaScript",
    icon: "fa-brands fa-js",
    question: "Which operator checks both value and data type?",
    option: ["==", "=", "===", "!="],
    answer: 2
}, {
    category: "JavaScript",
    icon: "fa-brands fa-js",
    question: "Which array method adds an element to the end of an array?",
    option: ["add()", "push()", "append()", "insert()"],
    answer: 1
}, {
    category: "JavaScript",
    icon: "fa-brands fa-js",
    question: "Which array method removes the last element?",
    option: ["remove()", "delete()", "pop()", "last()"],
    answer: 2
}, {
    category: "JavaScript",
    icon: "fa-brands fa-js",
    question: "Which method selects an HTML element using its ID?",
    option: ["getElementById()", "selectById()", "getById()", "queryId()"],
    answer: 0
}, {
    category: "JavaScript",
    icon: "fa-brands fa-js",
    question: "Which method converts a JSON string into a JavaScript object?",
    option: ["JSON.convert()", "JSON.stringify()", "JSON.parse()", "JSON.object()"],
    answer: 2
}, {
    category: "JavaScript",
    icon: "fa-brands fa-js",
    question: "Which function executes code after a specified delay?",
    option: ["setDelay()", "setTimeout()", "wait()", "delay()"],
    answer: 1
}, {
    category: "JavaScript",
    icon: "fa-brands fa-js",
    question: "Which keyword is used to return a value from a function?",
    option: ["send", "output", "return", "value"],
    answer: 2
}, {
    category: "JavaScript",
    icon: "fa-brands fa-js",
    question: "What does DOM stand for?",
    option: [
        "Document Object Model",
        "Data Object Model",
        "Document Oriented Method",
        "Digital Object Model"
    ],
    answer: 0
}];

let currentIndex = 0;
let selectedAnswers = new Array(allQuestion.length).fill(null);
let markedQuestions = new Array(allQuestion.length).fill(false);
let score = 0;

let second = 0;
let minute = 30;
let hour = 0;
let timerInterval = null;

const questionText = document.getElementById("questionText");
const questionCategory = document.getElementById("questionCategory");
const optionsContainer = document.getElementById("options");
const currentNumber = document.getElementById("currentNumber");
const totalNumber = document.getElementById("totalNumber");
const questionGrid = document.getElementById("questionGrid");
const progressFill = document.getElementById("progressFill");
const progressPercent = document.getElementById("progressPercent");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const submitMainBtn = document.getElementById("submitMainBtn");
const reviewBtn = document.getElementById("reviewBtn");
const timer = document.getElementById("timer");
const timerMessage = document.getElementById("timerMessage");
const submitModal = document.getElementById("submitModal");

totalNumber.textContent = allQuestion.length;
document.getElementById("headerTotal").textContent = allQuestion.length;

createQuestionGrid();
loadTheQuestion();
startTimer();

function loadTheQuestion() {
    const currentQuestion = allQuestion[currentIndex];
    currentNumber.textContent = currentIndex + 1;
    questionText.textContent = currentQuestion.question;
    questionCategory.innerHTML = '<i class="' + currentQuestion.icon + '"></i>' + currentQuestion.category;
    optionsContainer.innerHTML = "";

    const letters = ["A", "B", "C", "D"];

    for (let i = 0; i < currentQuestion.option.length; i++) {
        optionsContainer.innerHTML += '<div class="option">' +
            '<input type="radio" name="quizAnswer" id="answer-' + i + '" value="' + i + '">' +
            '<label class="option-label" for="answer-' + i + '">' +
            '<span class="option-letter">' + letters[i] + '</span>' +
            '<span class="option-text">' + currentQuestion.option[i] + '</span>' +
            '<span class="option-radio"></span>' +
            '</label>' +
            '</div>';
    }

    if (selectedAnswers[currentIndex] !== null) {
        document.getElementById("answer-" + selectedAnswers[currentIndex]).checked = true;
    }

    const radios = document.querySelectorAll('input[name="quizAnswer"]');

    for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener("change", function() {
            selectedAnswers[currentIndex] = Number(this.value);
            updateGrid();
            updateProgress();
        });
    }

    previousBtn.disabled = currentIndex === 0;

    if (currentIndex === allQuestion.length - 1) {
        nextBtn.style.display = "none";
        submitMainBtn.style.display = "flex";
    } else {
        nextBtn.style.display = "flex";
        submitMainBtn.style.display = "none";
    }

    updateReviewButton();
    updateGrid();
    updateProgress();
}

function createQuestionGrid() {
    questionGrid.innerHTML = "";

    for (let i = 0; i < allQuestion.length; i++) {
        questionGrid.innerHTML += '<button class="grid-btn" onclick="goToQuestion(' + i + ')">' + (i + 1) + '</button>';
    }
}

function goToQuestion(index) {
    currentIndex = index;
    loadTheQuestion();
}

function updateGrid() {
    const buttons = document.querySelectorAll(".grid-btn");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("current", "answered", "marked");

        if (i === currentIndex) {
            buttons[i].classList.add("current");
        }

        if (selectedAnswers[i] !== null) {
            buttons[i].classList.add("answered");
        }

        if (markedQuestions[i]) {
            buttons[i].classList.add("marked");
        }
    }
}

function updateProgress() {
    let answered = 0;

    for (let i = 0; i < selectedAnswers.length; i++) {
        if (selectedAnswers[i] !== null) {
            answered++;
        }
    }

    const percentage = Math.round(answered / allQuestion.length * 100);
    progressFill.style.width = percentage + "%";
    progressPercent.textContent = percentage + "%";
}

function nextQuestion() {
    if (currentIndex < allQuestion.length - 1) {
        currentIndex++;
        loadTheQuestion();
    }
}

function previousQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        loadTheQuestion();
    }
}

function toggleReview() {
    if (markedQuestions[currentIndex] === true) {
        markedQuestions[currentIndex] = false;
    } else {
        markedQuestions[currentIndex] = true;
    }

    updateReviewButton();
    updateGrid();
}

function updateReviewButton() {
    if (markedQuestions[currentIndex]) {
        reviewBtn.classList.add("marked");
        reviewBtn.innerHTML = '<i class="fa-solid fa-star"></i><span>Marked for Review</span>';
    } else {
        reviewBtn.classList.remove("marked");
        reviewBtn.innerHTML = '<i class="fa-regular fa-star"></i><span>Mark for Review</span>';
    }
}

function startTimer() {
    if (timerInterval !== null) {
        return;
    }

    let startTime = Date.now();
    let totalTime = (hour * 60 * 60) + (minute * 60) + second;

    updateTimer();

    timerInterval = setInterval(function() {
        let currentTime = Date.now();
        let timePassed = Math.floor((currentTime - startTime) / 1000);
        let remainingTime = totalTime - timePassed;

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;

            hour = 0;
            minute = 0;
            second = 0;

            updateTimer();

            timerMessage.textContent = "Time is over!";
            calculateResult();
            return;
        }

        hour = Math.floor(remainingTime / 3600);
        minute = Math.floor((remainingTime % 3600) / 60);
        second = remainingTime % 60;

        updateTimer();
    }, 200);
}

function updateTimer() {
    let ss;
    let mm;
    let hh;

    if (second < 10) {
        ss = "0" + second;
    } else {
        ss = second;
    }

    if (minute < 10) {
        mm = "0" + minute;
    } else {
        mm = minute;
    }

    if (hour < 10) {
        hh = "0" + hour;
    } else {
        hh = hour;
    }

    timer.textContent = hh + ":" + mm + ":" + ss;

    timer.classList.remove("warning", "danger");

    let totalSeconds = hour * 3600 + minute * 60 + second;

    if (totalSeconds <= 60) {
        timer.classList.add("danger");
        timerMessage.textContent = "Hurry! Less than 1 minute left.";
    } else if (totalSeconds <= 5 * 60) {
        timer.classList.add("warning");
        timerMessage.textContent = "Time is running low.";
    } else {
        timerMessage.textContent = "Keep going! You can do it!";
    }
}

function updateTimer() {
    let ss;
    let mm;
    let hh;

    if (second < 10) {
        ss = "0" + second;
    } else {
        ss = second;
    }

    if (minute < 10) {
        mm = "0" + minute;
    } else {
        mm = minute;
    }

    if (hour < 10) {
        hh = "0" + hour;
    } else {
        hh = hour;
    }

    if (hour > 0) {
        timer.textContent = hh + ":" + mm + ":" + ss;
    } else {
        timer.textContent = hh + ":" + mm + ":" + ss;
    }

    timer.classList.remove("warning", "danger");

    let totalSeconds = hour * 3600 + minute * 60 + second;

    if (totalSeconds <= 60) {
        timer.classList.add("danger");
        timerMessage.textContent = "Hurry! Less than 1 minute left.";
    } else if (totalSeconds <= 5 * 60) {
        timer.classList.add("warning");
        timerMessage.textContent = "Time is running low.";
    } else {
        timerMessage.textContent = "Keep going! You can do it!";
    }
}

function openSubmitModal() {
    submitModal.classList.add("show");
}

function closeSubmitModal() {
    submitModal.classList.remove("show");
}

function confirmSubmit() {
    closeSubmitModal();
    clearInterval(timerInterval);
    timerInterval = null;
    calculateResult();
}

function calculateResult() {
    score = 0;

    let correct = 0;
    let wrong = 0;
    let skipped = 0;

    for (let i = 0; i < selectedAnswers.length; i++) {
        if (selectedAnswers[i] === null) {
            skipped++;
        } else if (selectedAnswers[i] === allQuestion[i].answer) {
            correct++;
        } else {
            wrong++;
        }
    }

    score = correct;

    let percentage = (score / allQuestion.length) * 100;

    document.getElementById("quizPage").style.display = "none";
    document.getElementById("header").style.display = "none";
    document.getElementById("resultPage").style.display = "flex";

    document.getElementById("finalScore").textContent = score + "/" + allQuestion.length;
    document.getElementById("finalPercent").textContent = Math.round(percentage) + "% Score";
    document.getElementById("correctResult").textContent = correct;
    document.getElementById("wrongResult").textContent = wrong;
    document.getElementById("skippedResult").textContent = skipped;
}

function finishQuiz() {
    window.location.reload();
}

submitModal.addEventListener("click", function(event) {
    if (event.target === submitModal) {
        closeSubmitModal();
    }
});