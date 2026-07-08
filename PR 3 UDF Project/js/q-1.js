function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    if (b === 0) {
        return "Division by zero is not possible";
    }
    return a / b;
}

function mod(a, b) {
    if (b === 0) {
        return "Modulo by zero is not possible";
    }
    return a % b;
}

let choice;

do {
    choice = Number(prompt(
        "Press 1 for +\n" +
        "Press 2 for -\n" +
        "Press 3 for *\n" +
        "Press 4 for /\n" +
        "Press 5 for %\n" +
        "Press 0 for Exit"
    ));

    if (choice >= 1 && choice <= 5) {
        let num1 = +prompt("Enter the first number:");
        let num2 = +prompt("Enter the second number:");

        switch (choice) {
            case 1:
                alert("Addition of " + num1 + " and " + num2 + " is " + add(num1, num2));
                break;

            case 2:
                alert("Subtraction of " + num1 + " and " + num2 + " is " + sub(num1, num2));
                break;

            case 3:
                alert("Multiplication of " + num1 + " and " + num2 + " is " + mul(num1, num2));
                break;

            case 4:
                alert("Division of " + num1 + " and " + num2 + " is " + div(num1, num2));
                break;

            case 5:
                alert("Modulo of " + num1 + " and " + num2 + " is " + mod(num1, num2));
                break;
        }
    } else if (choice === 0) {
        alert("Program Exited");
    } else {
        alert("Invalid Choice");
    }

} while (choice !== 0);