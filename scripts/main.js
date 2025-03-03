document.querySelector("img").addEventListener("click", function () {
  if (this.getAttribute("src") === "images/Firefox-Dev.svg") {
    this.setAttribute("src", "images/Firefox.svg");
  } else {
    this.setAttribute("src", "images/Firefox-Dev.svg");
  }
});
document.querySelector("button").addEventListener("click", function () {
  let user = prompt("Please enter your name");
  if (!user) {
    document.querySelector("h1").textContent = "Welcome to my page, " + user;
  } else {
    document.querySelector("h1").textContent =
      "Welcome to my page, weird, nameless freak";
  }
  localStorage.setItem("name", user);
});
if (!localStorage.getItem("name")) {
  let user = prompt("Please enter your name");
  if (!user) {
    document.querySelector("h1").textContent = "Welcome to my page, " + user;
  } else {
    document.querySelector("h1").textContent =
      "Welcome to my page, weird, nameless freak";
  }
  localStorage.setItem("name", user);
} else {
  document.querySelector("h1").textContent =
    "Welcome to my page, " + localStorage.getItem("name");
}
