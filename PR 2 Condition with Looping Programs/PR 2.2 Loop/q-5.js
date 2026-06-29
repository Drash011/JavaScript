console.log("Alphabets:");

document.write("Output:<br><br>");

for (let i = 65; i <= 90; i = i + 4) {
    let ch = String.fromCharCode(i);

    console.log(ch);

    document.write(ch + " ");
}
