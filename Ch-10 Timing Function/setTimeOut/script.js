const modal = document.getElementById('model');
const closeBtn = document.getElementById('close-btn');


setTimeout(function() {
    model.style.opacity = 1;
}, 2000);


closeBtn.addEventListener("click", function() {
    modal.style.opacity = "0";
});