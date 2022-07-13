function main3() {
  let myButton = document.querySelector("#change-user");
  let myHeading = document.querySelector("h1");
  function setUserName() {
    let myName = prompt("please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = " This site is cool " + myName + ", isn't it?";
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "This site is cool " + storedName + ", isn't it?";
  }
  myButton.onclick = function (event) {
    const value = event.target.textContent;
    console.log("clicked", value);
    setUserName();
  };
}

main3();
