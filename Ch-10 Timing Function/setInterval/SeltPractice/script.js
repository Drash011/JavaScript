let seconds = 0;
let timer = null;
let running = false;

const display = document.getElementById("display");
const timerBox = document.getElementById("timerBox");
const status = document.getElementById("status");
const actionList = document.getElementById("actionList");
const emptyMessage = document.getElementById("emptyMessage");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");


function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(secs).padStart(2, "0")
    );
}

function updateDisplay() {
    display.textContent = formatTime(seconds);
}

function setStatus(text, className = "") {
    status.textContent = text;
    status.className = "status " + className;
}


function addAction() {

    const currentEmptyMessage =
        document.getElementById("emptyMessage");

    if (currentEmptyMessage) {
        currentEmptyMessage.remove();
    }

    const action = document.createElement("div");

    action.className = "action stopped";

    action.innerHTML = `
        <div class="action-icon">■</div>

        <div class="action-text">
            Timer stopped
            <span class="action-time">
                ${formatTime(seconds)}
            </span>
        </div>

        <button class="delete" title="Delete action">
            🗑
        </button>
    `;


    action.querySelector(".delete").addEventListener("click", () => {

        action.style.opacity = "0";
        action.style.transform = "translateX(20px)";

        setTimeout(() => {

            action.remove();

            if (actionList.children.length === 0) {

                const empty = document.createElement("div");

                empty.className = "empty";
                empty.id = "emptyMessage";
                empty.textContent =
                    "Your timer actions will appear here.";

                actionList.appendChild(empty);
            }

        }, 220);
    });


    actionList.prepend(action);
}


function clearActions() {

    actionList.innerHTML = `
        <div class="empty" id="emptyMessage">
            Your timer actions will appear here.
        </div>
    `;
}

function playSound() {

    if (typeof soundOn !== "undefined" && !soundOn) {
        return;
    }

    const AudioContext =
        window.AudioContext || window.webkitAudioContext;

    if (!AudioContext) return;

    const audio = new AudioContext();

    const oscillator = audio.createOscillator();
    const gain = audio.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value = 620;

    gain.gain.setValueAtTime(
        0.07,
        audio.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audio.currentTime + 0.18
    );

    oscillator.connect(gain);
    gain.connect(audio.destination);

    oscillator.start();

    oscillator.stop(
        audio.currentTime + 0.18
    );
}

startBtn.addEventListener("click", () => {

    if (running) {
        setStatus("ALREADY RUNNING", "running");
        return;
    }

    running = true;

    timerBox.classList.add("running");

    setStatus("RUNNING", "running");


    timer = setInterval(() => {

        seconds++;

        updateDisplay();

    }, 1000);
});

stopBtn.addEventListener("click", () => {

    if (!running) {
        setStatus("ALREADY STOPPED", "stopped");
        return;
    }

    running = false;

    clearInterval(timer);

    timer = null;

    timerBox.classList.remove("running");

    setStatus("STOPPED", "stopped");


    addAction();

    playSound();
});

resetBtn.addEventListener("click", () => {

    clearInterval(timer);

    timer = null;

    running = false;

    seconds = 0;

    timerBox.classList.remove("running");

    setStatus("RESET");

    updateDisplay();


    // Clear ALL messages automatically
    clearActions();

    playSound();
});

updateDisplay();