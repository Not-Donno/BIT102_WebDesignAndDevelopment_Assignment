const container = document.getElementById("container");
const registerbtn = document.getElementById("register");
const loginbtn = document.getElementById("login");
registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// Handle login
const signInForm = document.querySelector(".sign-in form");
signInForm.addEventListener("submit", (event) => {
  event.preventDefault(); 
  const inputs = signInForm.querySelectorAll("input");
  const username = inputs[0].value;
  const password = inputs[1].value;

  if (username === "admin" && password === "admin") {
    window.location.href = "HomePage.html";
  } else {
    alert("Invalid username or password!");
  }
});
