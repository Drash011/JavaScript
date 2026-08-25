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
];

const question = document.getElementById('question');
const option = document.querySelectorAll('span');
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

let currentIndex = 0;

let second = 0;
let minute = 30;
let hour = 0;
let timerInterval = null;


// Start Timer
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


// LOAD QUESTION
function loadTheQuestion() {
    question.textContent = allQuestion[currentIndex].question;

    option.forEach((question, index) => {
        question.textContent =
            allQuestion[currentIndex].option[index];
    });

    questionNumber.textContent = currentIndex + 1;

    // Previous Button
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
}

// NEXT BUTTON
nextBtn.addEventListener('click', () => {
    if (currentIndex === allQuestion.length - 1) {
        submitModal.style.display = 'flex';
    } else {
        currentIndex++;
        loadTheQuestion();
    }
});

// PREVIOUS BUTTON
preBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        loadTheQuestion();
    }
});

// NO BUTTON
noBtn.addEventListener('click', () => {
    submitModal.style.display = 'none';
});

// YES BUTTON
yesBtn.addEventListener('click', () => {
    submitModal.style.display = 'none';
    clearInterval(timerInterval);
    timerInterval = null;
    successModal.style.display = 'flex';
});

// Done Button
doneBtn.addEventListener('click', () => {

    successModal.style.display = 'none';

});

loadTheQuestion();

startTimer();