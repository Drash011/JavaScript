let time = 120;

let timer = document.getElementById("timer");
let resendBtn = document.getElementById("resendBtn");
let message = document.getElementById("message");

let resendCount = 0;
let maxResend = 3;

let interval;

function startTimer() {

    clearInterval(interval);

    time = 120;

    resendBtn.disabled = true;

    timer.innerText = "01:59";


    message.innerHTML = `
        <svg viewBox="0 0 24 24">

            <path d="M12 3L5 6V11C5 15.5 8 19.5 12 21C16 19.5 19 15.5 19 11V6L12 3Z"></path>

            <path d="M9 12L11 14L15 10"></path>

        </svg>

        <span>
            You can resend the code after the timer ends.
        </span>
    `;


    interval = setInterval(function() {

        time--;

        let minutes = Math.floor(time / 60);

        let seconds = time % 60;


        minutes =
            minutes < 10 ?
            "0" + minutes :
            minutes;


        seconds =
            seconds < 10 ?
            "0" + seconds :
            seconds;


        timer.innerText =
            minutes + ":" + seconds;

        if (time === 0) {

            clearInterval(interval);

            if (resendCount >= maxResend) {

                timer.innerText = "24h";


                message.innerHTML = `
                    <svg viewBox="0 0 24 24">

                        <path d="M12 3L5 6V11C5 15.5 8 19.5 12 21C16 19.5 19 15.5 19 11V6L12 3Z"></path>

                        <path d="M9 12L11 14L15 10"></path>

                    </svg>

                    <span>
                        Try again after 24 hours.
                    </span>
                `;


                resendBtn.disabled = true;

                return;
            }

            timer.innerText = "00:00";

            resendBtn.disabled = false;


            message.innerHTML = `
                <svg viewBox="0 0 24 24">

                    <path d="M12 3L5 6V11C5 15.5 8 19.5 12 21C16 19.5 19 15.5 19 11V6L12 3Z"></path>

                    <path d="M9 12L11 14L15 10"></path>

                </svg>

                <span>
                    You can resend the code now.
                </span>
            `;

        }

    }, 100);
}


resendBtn.addEventListener(
    "click",
    function() {

        if (resendCount >= maxResend) {
            return;
        }


        resendCount++;


        startTimer();

    }
);


startTimer();

const otpCard = document.querySelector(".otp-card");


otpCard.addEventListener("mousemove", function(event) {

    const rect = otpCard.getBoundingClientRect();


    const mouseX =
        event.clientX - rect.left;

    const mouseY =
        event.clientY - rect.top;


    const percentX =
        mouseX / rect.width;

    const percentY =
        mouseY / rect.height;

    const maxTilt = 7;


    const rotateX =
        (0.5 - percentY) * maxTilt;


    const rotateY =
        (percentX - 0.5) * maxTilt;


    otpCard.style.setProperty(
        "--rotate-x",
        rotateX + "deg"
    );

    otpCard.style.setProperty(
        "--rotate-y",
        rotateY + "deg"
    );


    otpCard.style.setProperty(
        "--mouse-x",
        percentX * 100 + "%"
    );

    otpCard.style.setProperty(
        "--mouse-y",
        percentY * 100 + "%"
    );

});

otpCard.addEventListener("mouseleave", function() {

    otpCard.style.setProperty(
        "--rotate-x",
        "0deg"
    );

    otpCard.style.setProperty(
        "--rotate-y",
        "0deg"
    );


    otpCard.style.setProperty(
        "--mouse-x",
        "50%"
    );

    otpCard.style.setProperty(
        "--mouse-y",
        "50%"
    );

});