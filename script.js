function showSection(id) {
  const sections = document.querySelectorAll(".section");

  sections.forEach(section => {
    section.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
    target.scrollIntoView({ behavior: "smooth" });
  }
}

/* ---------------- ASSIGNMENT MODAL ---------------- */

function openAssignment(type) {
  const title = document.getElementById("assignmentTitle");
  const questions = document.getElementById("assignmentQuestions");
  const hint = document.getElementById("assignmentHint");

  questions.innerHTML = "";

  if (type === "dbms") {
    title.innerText = "DBMS – Normalization";
    questions.innerHTML = `
      <li>Explain 1NF, 2NF and 3NF with examples.</li>
      <li>Normalize the given table up to 3NF.</li>
    `;
    hint.innerText = "Focus on removing partial and transitive dependencies.";
  }

  if (type === "oops") {
    title.innerText = "OOPS – Inheritance & Polymorphism";
    questions.innerHTML = `
      <li>Explain types of inheritance in Java.</li>
      <li>Differentiate method overloading and overriding.</li>
    `;
    hint.innerText = "Use real-world examples to explain polymorphism.";
  }

  if (type === "java") {
    title.innerText = "Java – Exception Handling";
    questions.innerHTML = `
      <li>Explain checked and unchecked exceptions.</li>
      <li>Write a program using try-catch-finally.</li>
    `;
    hint.innerText = "Focus on runtime exceptions and error handling flow.";
  }

  if (type === "os") {
    title.innerText = "OS – Process Scheduling";
    questions.innerHTML = `
      <li>Explain FCFS and SJF scheduling.</li>
      <li>Compare preemptive and non-preemptive scheduling.</li>
    `;
    hint.innerText = "Draw Gantt charts for better explanation.";
  }

  if (type === "cao") {
  title.innerText = "Computer Architecture & Organization – Instruction Pipelines";
  questions.innerHTML = `
    <li>Explain instruction pipelining with diagram.</li>
    <li>What are pipeline hazards? Explain with examples.</li>
  `;
  hint.innerText =
    "Focus on stages like fetch, decode, execute and types of hazards.";
}

if (type === "ds") {
  title.innerText = "Data Structures – Trees";
  questions.innerHTML = `
    <li>Explain binary trees and their applications.</li>
    <li>Differentiate between BST and AVL tree.</li>
  `;
  hint.innerText =
    "Pay attention to traversal techniques and balancing factor.";
}

if (type === "ss") {
  title.innerText = "System Software – Assemblers";
  questions.innerHTML = `
    <li>Explain single-pass and two-pass assemblers.</li>
    <li>What is the role of symbol table in an assembler?</li>
  `;
  hint.innerText =
    "Understand how source code is translated into machine code.";
}


  document.getElementById("assignmentModal").classList.remove("hidden");
}

function closeAssignment() {
  document.getElementById("assignmentModal").classList.add("hidden");
}

/* ---------------- DOUBTS ---------------- */

function postDoubt() {
  const input = document.getElementById("doubtInput");
  const text = input.value.trim();
  if (!text) return;

  const card = document.createElement("div");
  card.className = "doubt-card";

  card.innerHTML = `
    <p class="doubt-text">${text}</p>
    <span class="doubt-status pending">
      Pending – Will be addressed in next lecture
    </span>
  `;

  document.getElementById("doubtList").prepend(card);
  input.value = "";
}

/* ---------------- DASHBOARD STATS ---------------- */

function updateDashboardStats() {
  const pendingAssignments = document.querySelectorAll(
    ".assignment-card .pending"
  ).length;

  const totalTasks = document.getElementById("totalTasks");
  if (totalTasks) {
    totalTasks.innerText = pendingAssignments;
  }

  const upcomingExams = document.getElementById("upcomingExams");
  if (upcomingExams) {
    upcomingExams.innerText = "1";
  }
}

/* ---------------- INIT ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  updateDashboardStats();
});
// Font size control
document.getElementById("fontSizeSelect")?.addEventListener("change", (e) => {
  if (e.target.value === "small") {
    document.body.style.fontSize = "13px";
  } else if (e.target.value === "large") {
    document.body.style.fontSize = "16px";
  } else {
    document.body.style.fontSize = "14px";
  }
});

// Reset dashboard
function resetDashboard() {
  alert("Dashboard preferences reset successfully.");
  document.body.style.fontSize = "14px";
  document.getElementById("themeToggle").checked = false;
  document.body.classList.remove("dark");
}
function markRead(btn) {
  const card = btn.closest(".notification-card");
  card.classList.add("read");

  const badge = document.getElementById("notifBadge");
  let count = parseInt(badge.innerText);
  if (count > 0) badge.innerText = count - 1;
}
document.querySelectorAll(".notification-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.remove("unread");
  });
});
document.querySelectorAll(".notification-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.remove("unread");
  });
});
