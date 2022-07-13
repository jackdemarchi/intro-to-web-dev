const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const imgElements = document.querySelectorAll("img");
const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");
let isDark = true;

/* Declaring the array of image filenames */
const gallery = [
  "https://content.presspage.com/uploads/2110/1920_eye-cedars-sinai-thyroid.jpg?10000",
  "https://cloudfront-us-east-1.images.arcpublishing.com/tgam/FHXY2ILC4JNMNJDVFJUJKHIK3Q.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Bachelor%27s_button%2C_Basket_flower%2C_Boutonniere_flower%2C_Cornflower_-_3.jpg/1200px-Bachelor%27s_button%2C_Basket_flower%2C_Boutonniere_flower%2C_Cornflower_-_3.jpg",
  "https://media.istockphoto.com/photos/papyrus-picture-id153549151?k=20&m=153549151&s=612x612&w=0&h=_sPsIrg9q3EYydAY1RjOnT2kFJztyMzEnpxnm4Ip01U=",
  "http://www.didatticarte.it/Blog/wp-content/uploads/2015/12/retro-banksy.jpg",
];
/* Looping through images */
for (imageUrl of gallery) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", imageUrl);
  thumbBar.appendChild(newImage);
  newImage.addEventListener("click", update);
}

function update(event) {
  console.log("ciao");
  const img = event.target;
  console.log("img source", img.getAttribute("src"));
  displayedImage.setAttribute("src", img.getAttribute("src"));
}

/* Wiring up the Darken/Lighten button */
function light(_event) {
  if (!isDark) {
    displayedImage.style.filter = null;
    isDark = true;
  } else {
    displayedImage.style.filter = "brightness(0.5)";
    isDark = false;
  }
}

btn.addEventListener("click", light);
