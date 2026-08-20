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

function addAction(type) {

    if (emptyMessage) {
        emptyMessage.remove();
    }

    const action = document.createElement("div");

    let icon = "";
    let text = "";
    let className = "";

    if (type === "started") {
        icon = "▶";
        text = "Timer started";
        className = "started";
    }

    if (type === "stopped") {
        icon = "■";
        text = "Timer stopped";
        className = "stopped";
    }

    if (type === "reset") {
        icon = "↻";
        text = "Timer reset";
        className = "reset-action";
    }

    action.className = "action " + className;

    action.innerHTML = `
            <div class="action-icon">${icon}</div>

            <div class="action-text">
                ${text}
                <span class="action-time">${formatTime(seconds)}</span>
            </div>

            <button class="delete" title="Delete action">🗑</button>
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

function playSound() {

    if (!soundOn) return;

    const AudioContext =
        window.AudioContext || window.webkitAudioContext;

    if (!AudioContext) return;

    const audio = new AudioContext();

    const oscillator = audio.createOscillator();
    const gain = audio.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value = 620;

    gain.gain.setValueAtTime(.07, audio.currentTime);

    gain.gain.exponentialRampToValueAtTime(
        .001,
        audio.currentTime + .18
    );

    oscillator.connect(gain);
    gain.connect(audio.destination);

    oscillator.start();
    oscillator.stop(audio.currentTime + .18);
}

startBtn.addEventListener("click", () => {

    if (running) {
        setStatus("ALREADY RUNNING", "running");
        return;
    }

    running = true;

    timerBox.classList.add("running");
    setStatus("RUNNING", "running");

    addAction("started");

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

    timerBox.classList.remove("running");
    setStatus("STOPPED", "stopped");

    addAction("stopped");
    playSound();
});

resetBtn.addEventListener("click", () => {

    clearInterval(timer);

    running = false;
    seconds = 0;

    timerBox.classList.remove("running");
    setStatus("RESET");

    updateDisplay();

    addAction("reset");
    playSound();
});


updateDisplay();