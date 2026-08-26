const allQuestion = [{
        question: "01. Which keyword is used to declare a block-scoped variable in JavaScript?",
        option: ['var', 'let', 'constvar', 'define'],
        answer: 1,
    },
    {
        question: "02. Which method removes the first element from an array?",
        option: ['pop()', 'delete()', 'shift()', 'removefirst()'],
        answer: 2,
    },
    {
        question: "03. Which method returns the first element that satisfies a condition?",
        option: ['filter()', 'find()', 'map()', 'search()'],
        answer: 1,
    },
    {
        question: "04. What is the output of console.log(10 + 5 + '5')?",
        option: [20, '1055', '155', '205'],
        answer: 2,
    },
    {
        question: "05. Which keyword refers to the current object in a method?",
        option: ['self', 'current', 'this', 'object'],
        answer: 2,
    },
    {
        question: "06. Which method is used to select the first element matching a CSS selector?",
        option: ['getElement()', 'querySelector()', 'querySelectorAll()', 'selectElement()'],
        answer: 1,
    },
    {
        question: "07. What does querySelectorAll() return?",
        option: ['Single Element', 'HTML string', 'NodeList', 'Array'],
        answer: 2,
    },
    {
        question: "08. Which event occurs when the user moves the mouse over an element?",
        option: ['mousemove', 'mouseover', 'mouseenter', 'All of these can relate to mouse movement/entry'],
        answer: 3,
    },
    {
        question: "09. Which method is commonly used to attach an event handler?",
        option: ['addEvent()', 'attachEventListener()', 'addEventListener()', 'eventListener()'],
        answer: 2,
    },
    {
        question: "10. Which property changes only the text content of an element without parsing HTML?",
        option: ['innerHTML', 'innerText', 'textContent', 'htmlText'],
        answer: 2,
    },
    {
        question: "11. What happens when innerHTML is assigned a string containing HTML tags?",
        option: ['Tags are displayed as plain text', 'Tags are parsed as HTML', 'JavaScript throws an error', 'Nothing happens'],
        answer: 1,
    },
    {
        question: "12. Which property returns the value entered into an <input> element?",
        option: ['textContent', 'innerHTML', 'value', 'inputText'],
        answer: 2,
    },
    {
        question: "13. In event bubbling, an event generally moves from:",
        option: ['Parent → Child', 'Child → Parent', 'Browser → DOM', 'Window → Document only'],
        answer: 1,
    },
    {
        question: "14. Which event phase occurs first?",
        option: ['Bubbling', 'Target', 'Capturing', 'Execution'],
        answer: 2,
    },
    {
        question: "15. What does event.target refer to?",
        option: ['Element where the listener was registered', 'Element that originally triggered the event', 'Parent element', 'Document object'],
        answer: 1,
    },
    {
        question: "16. Which method removes an event listener?",
        option: ['removeEvent()', 'deleteEventListener()', 'removeEventListener()', 'clearEvent()'],
        answer: 2,
    },
    {
        question: "17. Which property is useful for determining which keyboard key was pressed?",
        option: ['event.key', 'event.keyboard', 'event.button', 'event.input'],
        answer: 0,
    },
    {
        question: "18. Which event is fired when the value of an input changes and the user commits the change, commonly by leaving the field?",
        option: ['click', 'change', 'submit', 'input'],
        answer: 1,
    },
    {
        question: "19. Which event fires as the user types or modifies the value of an input?",
        option: ['input', 'changeOnly', 'typing', 'modify'],
        answer: 0,
    },
    {
        question: "20.What does document.createElement('div') return?",
        option: ['HTML String', 'New DOM element', 'NodeList', 'CSS Selector'],
        answer: 1,
    },
    {
        question: "21. Which method adds a node as the last child of an element?",
        option: ['appendChild()', 'addChild()', 'insertLast()', 'pushChild()'],
        answer: 0,
    },
    {
        question: "22. What does classList.toggle('active') generally do?",
        option: ['Always adds active', 'Always removes active', 'Adds it if absent and removes it if present', 'Deletes all classes'],
        answer: 2,
    },
    {
        question: "23. What is returned by document.getElementById('box') when no matching element exists?",
        option: ['undefined', 'false', 'null', 'Empty NodeList'],
        answer: 2,
    },
    {
        question: "24. What is the result of typeof undefined?",
        option: ['null', 'undefined', 'object', 'empty'],
        answer: 1,
    },
    {
        question: "25. Which operator performs type coercion during comparison?",
        option: ['===', '!==', '==', '='],
        answer: 2,
    },
    {
        question: "26. Which value is NOT considered falsy in JavaScript?",
        option: [0, '" "', 'null', '[ ]'],
        answer: 3,
    },
    {
        question: "27. Which of the following is a primitive data type?",
        option: ['Array', 'String', 'Function', 'object'],
        answer: 1,
    },
    {
        question: "28. Which method transforms every element of an array?",
        option: ['map()', 'filter()', 'find()', 'some()'],
        answer: 0,
    },
    {
        question: "29. Which method checks whether all elements satisfy a condition?",
        option: ['all()', 'every()', 'each()', 'checkAll()'],
        answer: 1,
    },
    {
        question: "30. What does a function return when no return statement is provided?",
        option: ['null', 'false', 'undefined', 0],
        answer: 2,
    },
];

const question = document.getElementById('question');
const option = document.querySelectorAll('.options-container .option span');
const radioButtons = document.querySelectorAll('.options-container input[type="radio"]');
const nextBtn = document.getElementById('nextBtn');
const preBtn = document.getElementById('preBtn');
const questionNumber = document.getElementById('questionNumber');
const submitModal = document.getElementById('submitModal');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const successModal = document.getElementById('successModal');
const doneBtn = document.getElementById('doneBtn');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const questionGridButtons = document.querySelectorAll('.question-number');

let currentIndex = 0;
let selectedAnswers = new Array(allQuestion.length).fill(null);
let visitedQuestions = new Array(allQuestion.length).fill(false);
let score = 0;

visitedQuestions[0] = true;

let second = 0;
let minute = 30;
let hour = 0;
let timerInterval = null;

function startTimer() {
    if (timerInterval != null) {
        return;
    }

    timerInterval = setInterval(() => {
        if (hour === 0 && minute === 0 && second === 0) {
            clearInterval(timerInterval);
            timerInterval = null;

            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";

            submitModal.style.display = 'flex';
            return;
        }

        second--;

        if (second < 0) {
            second = 59;
            minute--;
        }

        if (minute < 0) {
            minute = 59;
            hour--;
        }

        let ss = second < 10 ? `0${second}` : `${second}`;
        let mm = minute < 10 ? `0${minute}` : `${minute}`;
        let hh = hour < 10 ? `0${hour}` : `${hour}`;

        hours.textContent = hh;
        minutes.textContent = mm;
        seconds.textContent = ss;
    }, 1000);
}

function loadTheQuestion() {
    visitedQuestions[currentIndex] = true;

    const currentQuestion = allQuestion[currentIndex];

    question.textContent = currentQuestion.question;
    questionNumber.textContent = currentIndex + 1;

    option.forEach((span, index) => {
        span.textContent = currentQuestion.option[index];
    });

    radioButtons.forEach((radio, index) => {
        radio.checked = selectedAnswers[currentIndex] === index;
    });

    if (currentIndex === 0) {
        preBtn.disabled = true;
    } else {
        preBtn.disabled = false;
    }

    if (currentIndex === allQuestion.length - 1) {
        nextBtn.textContent = "Submit";
        nextBtn.style.backgroundColor = "#16a34a";
        nextBtn.style.borderColor = "#16a34a";
    } else {
        nextBtn.textContent = "Next →";
        nextBtn.style.backgroundColor = "";
        nextBtn.style.borderColor = "";
    }

    updateQuestionGrid();
}

radioButtons.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        selectedAnswers[currentIndex] = index;
        visitedQuestions[currentIndex] = true;
        updateQuestionGrid();
    });
});

function updateQuestionGrid() {
    questionGridButtons.forEach((button, index) => {
        button.classList.remove(
            "current-unanswered",
            "current-answered",
            "answered",
            "unanswered"
        );

        if (index === currentIndex) {
            if (selectedAnswers[index] !== null) {
                button.classList.add("current-answered");
            } else {
                button.classList.add("current-unanswered");
            }

            return;
        }

        if (selectedAnswers[index] !== null) {
            button.classList.add("answered");
            return;
        }

        button.classList.add("unanswered");
    });
}

nextBtn.addEventListener('click', () => {
    if (currentIndex === allQuestion.length - 1) {
        submitModal.style.display = 'flex';
        return;
    }

    currentIndex++;
    visitedQuestions[currentIndex] = true;
    loadTheQuestion();
});

preBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        visitedQuestions[currentIndex] = true;
        loadTheQuestion();
    }
});

questionGridButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index >= allQuestion.length) {
            return;
        }

        currentIndex = index;
        visitedQuestions[currentIndex] = true;
        loadTheQuestion();
    });
});

function calculateScore() {
    score = 0;

    selectedAnswers.forEach((currentAnswer, index) => {
        if (
            currentAnswer !== null &&
            currentAnswer === allQuestion[index].answer
        ) {
            score++;
        }
    });

    return score;
}

noBtn.addEventListener('click', () => {
    submitModal.style.display = 'none';
});

yesBtn.addEventListener('click', () => {
    calculateScore();

    submitModal.style.display = 'none';

    clearInterval(timerInterval);
    timerInterval = null;

    let scoreElement = document.getElementById('score');

    if (!scoreElement) {
        scoreElement = document.createElement('div');
        scoreElement.id = 'score';
        scoreElement.style.fontSize = '24px';
        scoreElement.style.fontWeight = '700';
        scoreElement.style.color = '#16a34a';
        scoreElement.style.margin = '10px 0 20px';
        scoreElement.style.textAlign = 'center';

        const message = successModal.querySelector('p');

        if (message) {
            message.insertAdjacentElement('afterend', scoreElement);
        } else if (doneBtn) {
            successModal.insertBefore(scoreElement, doneBtn);
        } else {
            successModal.appendChild(scoreElement);
        }
    }

    scoreElement.textContent = `Your Score: ${score} / ${allQuestion.length}`;

    successModal.style.display = 'flex';
});

doneBtn.addEventListener('click', () => {
    successModal.style.display = 'none';
});

loadTheQuestion();
startTimer();