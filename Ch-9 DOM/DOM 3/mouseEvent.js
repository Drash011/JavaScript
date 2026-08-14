// TOP BUTTONS
const clickBtn =
    document.getElementById("clickBtn");

const doubleClickBtn =
    document.getElementById("doubleClickBtn");

const mouseEventsBtn =
    document.getElementById("mouseEventsBtn");

const mouseEventsCard =
    document.getElementById("mouseEventsCard");

// SINGLE CLICK
clickBtn.addEventListener("click", () => {

    clickBtn.classList.add("active");

    setTimeout(() => {

        clickBtn.classList.remove("active");

    }, 300);

    alert("Clicked...!");

});


// DOUBLE CLICK

doubleClickBtn.addEventListener("dblclick", () => {

    doubleClickBtn.classList.add("active");

    setTimeout(() => {

        doubleClickBtn.classList.remove("active");

    }, 300);

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

// COUNTER

const increment =
    document.getElementById("increment");

const decrement =
    document.getElementById("decrement");

const count =
    document.getElementById("count");


let number = 1;

/* UPDATE COUNTER */
function updateCounter() {

    count.innerText = number;

    count.classList.add("changed");

    setTimeout(() => {

        count.classList.remove("changed");

    }, 150);

}

/* INCREMENT */
increment.addEventListener("click", () => {

    if (number < 20) {

        number++;

        updateCounter();

    }

});

/* DECREMENT */
decrement.addEventListener("click", () => {

    if (number > 1) {

        number--;

        updateCounter();

    }

});

// MOUSE EVENTS

const box =
    document.getElementById("mouseBox");

const counter =
    document.querySelector(".counter");

const eventStatus =
    document.getElementById("eventStatus");

const boxWrapper =
    document.querySelector(".box-wrapper");


box.addEventListener("mouseenter", () => {

    box.classList.add("js-hover");

    eventStatus.innerText =
        "mouseenter event triggered";

});


// MOUSE LEAVE

box.addEventListener("mouseleave", () => {

    box.classList.remove("js-hover");

    box.classList.remove("pressed");

    box.style.transform =
        "translate3d(0, 0, 0)";

    counter.classList.remove("active");

    eventStatus.innerText =
        "mouseleave event triggered";

});


// MOUSE DOWN

box.addEventListener("mousedown", () => {

    box.classList.add("pressed");

    eventStatus.innerText =
        "mousedown event triggered";

});


// MOUSE UP

box.addEventListener("mouseup", () => {

    box.classList.remove("pressed");

    eventStatus.innerText =
        "mouseup event triggered";

});


// MOUSE OVER

box.addEventListener("mouseover", () => {

    counter.classList.add("active");

    eventStatus.innerText =
        "mouseover event triggered";

});


// MOUSE OUT

box.addEventListener("mouseout", () => {

    counter.classList.remove("active");

    eventStatus.innerText =
        "mouseout event triggered";

});


// SINGLE CLICK ON BOX

box.addEventListener("click", () => {

    box.classList.add("clicked");

    eventStatus.innerText =
        "click event triggered";

});


// DOUBLE CLICK ON BOX

box.addEventListener("dblclick", () => {

    box.classList.add("double-clicked");

    eventStatus.innerText =
        "dblclick event triggered";

});


// MOUSE MOVE

boxWrapper.addEventListener("mousemove", (event) => {

    const rect =
        boxWrapper.getBoundingClientRect();

    const mouseX =
        event.clientX - rect.left;

    const mouseY =
        event.clientY - rect.top;

    const centerX =
        rect.width / 2;

    const centerY =
        rect.height / 2;

    const moveX =
        mouseX - centerX;

    const moveY =
        mouseY - centerY;


    box.style.transform =
        `translate3d(
                    ${moveX * 0.35}px,
                    ${moveY * 0.35}px,
                    60px
                )`;


    eventStatus.innerText =
        "mousemove event triggered";

});


// MOUSE LEAVE FROM WRAPPER

boxWrapper.addEventListener("mouseleave", () => {

    box.style.transform =
        "translate3d(0, 0, 0)";

    eventStatus.innerText =
        "Move your mouse over the area";

});