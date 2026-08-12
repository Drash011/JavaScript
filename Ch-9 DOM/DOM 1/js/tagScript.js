// h1 Yag
const h1 = document.getElementsByTagName('h1');

let h1List = Array.from(h1);

h1List.forEach((element, index) => {
    element.style.cssText = 'background-color: LightGreen; padding: 20px;border-radius: 10px; display: inline-block; color: green; border: 2px solid green;';
})


if (h1List.length > 0) {
    console.log("ID : ", h1List[0].id);
    console.log("CLASS : ", h1List[0].className);
    console.log("CLASS : ", h1List[0].classList);

    h1List[0].classList.add('btn');

    console.log(h1List[0].textContent);
    console.log(h1List[0].innerText);
    console.log(h1List[0].innerHTML);

    h1List[0].style.cssText = "color: green; background-color: LightGreen; padding: 20px; border: 2px solid green; border-radius: 10px;";
    h1List[1].style.cssText = "color: green; background-color: LightGreen; text-align: center; padding: 20px; width: 65%; margin: 20px auto; border: 2px solid green; border-radius: 8px;";

}

// img Tag
const img = document.getElementsByTagName('img');

let image = Array.from(img);

if (image.length > 0) {
    console.log("CLASS : ", image[0].className);

    image[0].classList.add('btn');

    image[0].style.cssText = "border: 2px solid green; border-radius: 8px; width: 500px; height: 350px; display: block; margin: 0 auto;";

}

// P Tag
const p = document.getElementsByTagName('p');

let paragraph = Array.from(p);

if (paragraph.length > 0) {
    console.log("CLASS : ", paragraph[0].className);

    paragraph[0].classList.add('btn');

    paragraph[0].style.cssText= "background-color: skyblue; color: darkblue; padding: 10px; width: 70%; margin : 10px auto; border: 2px solid darkblue; border-radius: 8px;";
}
