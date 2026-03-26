const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const errors = document.querySelectorAll(".error");

  errors.forEach(err => err.textContent = "");

  let valid = true;

  if (name === "") {
    errors[0].textContent = "Name is required";
    valid = false;
  }

  if (!email.includes("@")) {
    errors[1].textContent = "Invalid email";
    valid = false;
  }

  if (password.length < 8) {
    errors[2].textContent = `Password must be at least 8 characters`;
    valid = false;
  }

  if (valid) {
    alert("Form Submitted Successfully!");
  }
});