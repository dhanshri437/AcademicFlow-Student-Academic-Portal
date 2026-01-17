document.getElementById("password").addEventListener("input", () => {
  const password = document.getElementById("password").value;
  const error = document.getElementById("passwordError");

  if (password.length === 0) {
    error.classList.add("hidden");
  } else if (password.length < 8) {
    error.classList.remove("hidden");
  } else {
    error.classList.add("hidden");
  }
});




function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("passwordError");

  if (!email) return;

  if (password.length < 8) {
  error.classList.remove("hidden");
  return;

}


  error.classList.add("hidden");

  const namePart = email.split("@")[0];
  const formattedName = namePart.replace(/[._]/g, " ").toUpperCase();

  localStorage.setItem("studentName", formattedName);

  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");

  document.getElementById("studentName").innerText = formattedName;

  showSection("dashboard");
  document
    .getElementById("dashboard")
    .scrollIntoView({ behavior: "smooth" });
    document.getElementById("chatbotToggle").classList.remove("hidden");

}


function logout() {
  localStorage.removeItem("studentName");
  window.location.href = window.location.pathname;
}

window.onload = () => {
  const name = localStorage.getItem("studentName");

  if (name) {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
    document.getElementById("studentName").innerText = name;
    showSection("dashboard");
  } else {
    document.getElementById("app").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
    document.getElementById("chatbotToggle").classList.add("hidden");

  }
};
