// Q1
let a = Number(prompt("Enter First Number"));
let b = Number(prompt("Enter Second Number"));
let c = Number(prompt("Enter Third Number"));

let min = (a < b) ? ((a < c) ? a : c) : ((b < c) ? b : c);

console.log("Q1");
console.log("First Number : " + a);
console.log("Second Number : " + b);
console.log("Third Number : " + c);
console.log("Minimum Number is : " + min);

document.write("<h2>Q1</h2>");
document.write("First Number : " + a + "<br>");
document.write("Second Number : " + b + "<br>");
document.write("Third Number : " + c + "<br>");
document.write("Minimum Number is : " + min + "<hr>");


// Q2
console.log("\n\nQ2");
document.write("<h2>Q2</h2>");

let language = Number(prompt(
    "Press 1 for English\nPress 2 for Hindi\nPress 3 for Gujarati"
));

console.log("Language Choice : " + language);
document.write("Language Choice : " + language + "<br>");

switch (language) {

    case 1:

        let eng = Number(prompt(
            "Press 1 for Internet Recharge\nPress 2 for Top-up Recharge\nPress 3 for Special Recharge"
        ));

        console.log("Recharge Choice : " + eng);
        document.write("Recharge Choice : " + eng + "<br>");

        switch (eng) {

            case 1:
                console.log("You have successfully done Internet Recharge.");
                document.write("You have successfully done Internet Recharge.");
                break;

            case 2:
                console.log("You have successfully done Top-up Recharge.");
                document.write("You have successfully done Top-up Recharge.");
                break;

            case 3:
                console.log("You have successfully done Special Recharge.");
                document.write("You have successfully done Special Recharge.");
                break;

            default:
                console.log("Invalid Choice");
                document.write("Invalid Choice");
        }

        break;

    case 2:

        let hindi = Number(prompt(
            "Internet Recharge ke liye 1 dabaiye\nTop-up Recharge ke liye 2 dabaiye\nSpecial Recharge ke liye 3 dabaiye"
        ));

        console.log("Recharge Choice : " + hindi);
        document.write("Recharge Choice : " + hindi + "<br>");

        switch (hindi) {

            case 1:
                console.log("Aapne safaltapurvak Internet Recharge kar liya hai.");
                document.write("Aapne safaltapurvak Internet Recharge kar liya hai.");
                break;

            case 2:
                console.log("Aapne safaltapurvak Top-up Recharge kar liya hai.");
                document.write("Aapne safaltapurvak Top-up Recharge kar liya hai.");
                break;

            case 3:
                console.log("Aapne safaltapurvak Special Recharge kar liya hai.");
                document.write("Aapne safaltapurvak Special Recharge kar liya hai.");
                break;

            default:
                console.log("Invalid Choice");
                document.write("Invalid Choice");
        }

        break;

    case 3:

        let guj = Number(prompt(
            "Internet Recharge mate 1 dabavo\nTop-up Recharge mate 2 dabavo\nSpecial Recharge mate 3 dabavo"
        ));

        console.log("Recharge Choice : " + guj);
        document.write("Recharge Choice : " + guj + "<br>");

        switch (guj) {

            case 1:
                console.log("Tame safaltapurvak Internet Recharge kari lidhu chhe.");
                document.write("Tame safaltapurvak Internet Recharge kari lidhu chhe.");
                break;

            case 2:
                console.log("Tame safaltapurvak Top-up Recharge kari lidhu chhe.");
                document.write("Tame safaltapurvak Top-up Recharge kari lidhu chhe.");
                break;

            case 3:
                console.log("Tame safaltapurvak Special Recharge kari lidhu chhe.");
                document.write("Tame safaltapurvak Special Recharge kari lidhu chhe.");
                break;

            default:
                console.log("Invalid Choice");
                document.write("Invalid Choice");
        }

        break;

    default:
        console.log("Invalid Language");
        document.write("Invalid Language");
}