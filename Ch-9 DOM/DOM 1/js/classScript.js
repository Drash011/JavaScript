let heading = document.getElementsByClassName("mainHeading");

console.log(heading);

if (heading.length > 0) {
    console.log("ID : ", heading[0].id);
    console.log("CLASS : ", heading[0].className);
    console.log("CLASS : ", heading[0].classList);

    // heading[0].className = `${heading[0].className} btn`;

    heading[0].classList.add('btn');

    // heading[0].classList.remove('title');

    console.log(heading[0].textContent);
    console.log(heading[0].innerText);
    console.log(heading[0].innerHTML);


    heading[0].innerText = "Drashti Thummar";

    heading[0].style.cssText = "color: darkblue; background-color: pink; padding: 20px;";
    heading[1].style.cssText = "color: darkblue; background-color: pink; padding: 20px; width: 65%; margin: 20px auto; border: 2px solid darkblue; border-radius: 8px;";
    
}