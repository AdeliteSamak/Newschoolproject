console.log("ok")
let login = "MrVerycool";
let pw = "noonewilleverguest";

if (pw == "noonewilleverguest") {
    console.log("You're in");
} else {
    console.log("You're out");
}


const on_off_switch = document.querySelector("#myswitch");
on_off_switch.addEventListener("click", changeSrc);

let softpen_image = document.querySelector("#mysoftpen");

function changeSrc() {
    console.log("function to change image.src");
    // if the image is still
    if (softpen_image.getAttribute('src') == "../adidas.png") {
        // make it move
        softpen_image.src = "../android.jpeg";
        // change the text of the button
        on_off_switch.textContent = "Turn it off";
    } else {
        softpen_image.src = "../android.jpeg";
        on_off_switch.textContent = "Turn the gif on";
    }
}
