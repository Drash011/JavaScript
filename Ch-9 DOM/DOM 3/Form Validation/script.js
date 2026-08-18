const student_Form = document.getElementById('student_Form');
const fullName = document.getElementById('full_name');
const email = document.getElementById('email');
const password = document.getElementById('password');

student_Form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Full Name
    if (fullName.value === "") {
        fullName.classList.add('border-danger');
        document.querySelector('#fullNameError').innerText =
            "Please enter your full name...";
        return;
    }

    // Email
    if (email.value === "") {
        email.classList.add('border-danger');
        document.querySelector('#emailError').innerText =
            "Please enter your email...";
        return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add('border-danger');
        document.querySelector('#emailError').innerText =
            "Please enter a valid email address";
        return;
    }

    // Password
    if (password.value === "") {
        password.classList.add('border-danger');
        document.querySelector('#passwordError').innerText =
            "Please enter your password...";
        return;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password.value)) {
        password.classList.add('border-danger');
        document.querySelector('#passwordError').innerText =
            "Password must be at least 8 characters with uppercase, lowercase, number and special character";
        return;
    }

    // Mobile

    console.log("Form Submitted...");
});