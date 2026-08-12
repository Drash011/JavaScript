const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const count = document.getElementById("count");

const mouseEventsBtn = document.getElementById("mouseEventsBtn");

const counterCard = document.getElementById("counterCard");
const mouseEventsCard = document.getElementById("mouseEventsCard");

// CLICK EVENT
const clickBtn = document.getElementById("clickBtn");

clickBtn.addEventListener("click", () => {
    alert("Clicked...!");
});

// DOUBLE CLICK EVENT
const doubleClickBtn = document.getElementById("doubleClickBtn");

doubleClickBtn.addEventListener("dblclick", () => {
    alert("Double Clicked...!");
});

// MOUSE EVENTS BUTTON
mouseEventsBtn.addEventListener("click", () => {

    mouseEventsBtn.classList.add("active");

    mouseEventsCard.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    mouseEventsCard.classList.add("highlight");

    setTimeout(() => {

        mouseEventsBtn.classList.remove("active");
        mouseEventsCard.classList.remove("highlight");

    }, 1000);

});

// Increment
increment.addEventListener("click", () => {

    let num = Number(count.innerText);

    if (num < 20) {
        count.innerText = num + 1;
    }

});


// Decrement
decrement.addEventListener("click", () => {

    let num = Number(count.innerText);

    if (num > 1) {
        count.innerText = num - 1;
    }

});


// MOUSE EVENTS
const box = document.querySelector(".box");
const counter = document.querySelector(".counter");
const eventStatus = document.getElementById("eventStatus");

// MOUSEDOWN
box.addEventListener("mousedown", () => {

    box.classList.add("pressed");

    eventStatus.innerText = "mousedown event triggered";

});

// MOUSEUP
box.addEventListener("mouseup", () => {

    box.classList.remove("pressed");

    eventStatus.innerText = "mouseup event triggered";

});

// MOUSEOVER
box.addEventListener("mouseover", () => {

    counter.classList.add("active");

    eventStatus.innerText = "mouseover event triggered";

});

// MOUSEOUT
box.addEventListener("mouseout", () => {

    counter.classList.remove("active");

    eventStatus.innerText = "mouseout event triggered";

});

// MOUSEMOVE
const boxWrapper = document.querySelector(".box-wrapper");

boxWrapper.addEventListener("mousemove", (event) => {
    const rect = boxWrapper.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const moveX = mouseX - centerX;
    const moveY = mouseY - centerY;
    box.style.transform =
        `translate3d(${moveX * 0.35}px, ${moveY * 0.35}px, 60px)`;
    eventStatus.innerText = "mousemove event triggered";
});

// MOUSELEAVE
boxWrapper.addEventListener("mouseleave", () => {

    box.style.transform =
        "translate3d(0, 0, 0)";

    eventStatus.innerText =
        "Move your mouse over the area";

});