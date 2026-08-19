const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const modalClose = document.getElementById("modalClose");
const closeAll = document.getElementById("closeAll");
const notifications = document.querySelectorAll(".notification");


function showModal() {
    modal.classList.add("show-modal");

    setTimeout(() => {
        notifications[0].classList.add("show");
    }, 300);

    setTimeout(() => {
        notifications[1].classList.add("show");
    }, 1000);

    setTimeout(() => {
        notifications[2].classList.add("show");
    }, 1700);

    setTimeout(() => {
        notifications[3].classList.add("show");
    }, 2400);
}

openModal.addEventListener("click", () => {
    showModal();
});

modalClose.addEventListener("click", () => {
    modal.classList.add("hidden");
});

closeAll.addEventListener("click", () => {
    modal.classList.add("hidden");
});

const notificationCloseButtons = document.querySelectorAll(".notification-close");

notificationCloseButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const notification = event.target.closest(".notification");
        notification.classList.remove("show");
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.classList.add("hidden");
    }
});

setTimeout(() => {
    showModal();
}, 2000);