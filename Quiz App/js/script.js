const allQuestion = [{
        question: "01. Which keyword is used to declare a block-scoped variable in JavaScript?",
        option: ['var', 'let', 'constvar', 'define'],
        answer: 1,
    },
    {
        question: "02. Which method removes the first element from an array?",
        option: ['pop()', 'delete()', 'shift()', 'removefirst()'],
        answer: 2,
    }, {
        question: "03. Which method returns the first element that satisfies a condition?",
        option: ['filter()', 'find()', 'map()', 'search()'],
        answer: 1,
    }, {
        question: "04. What is the output of console.log(10 + 5 + '5')?",
        option: [20, '1055', '155', '205'],
        answer: 2,
    }, {
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
let currentIndex = 0;


function loadTheQuestion() {
    question.textContent = allQuestion[currentIndex].question;

    option.forEach((question, index) => {
        question.textContent = allQuestion[currentIndex].option[index];
    });

    questionNumber.textContent = currentIndex + 1;

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
    }
}

// Next Button
nextBtn.addEventListener('click', () => {
    if (currentIndex < allQuestion.length) {
        currentIndex++;
        loadTheQuestion();
    } else {
        submitModal.style.display = 'flex';
    }
});

// Previous Button
preBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        loadTheQuestion();
    }
});

// No Button
noBtn.addEventListener('click', () => {
    submitModal.style.display = 'none';
});

// Yes Button
yesBtn.addEventListener('click', function() {
    submitModal.style.display = 'none';
    successModal.style.display = 'flex';
});

// Done Button
doneBtn.addEventListener('click', function() {
    successModal.style.display = 'none';
});

loadTheQuestion();