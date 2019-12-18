let i = 0;
let images = [];
let time = 2500;

images[0] = "images/phongkhach.jpg";
images[1] = "images/banghe3.jpeg";
images[2] = "images/banghe2.jpg";

function changeImg() {
    document.getElementById("slide").src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}
