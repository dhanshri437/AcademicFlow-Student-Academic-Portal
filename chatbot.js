function toggleChatbot() {
  document.getElementById("chatbotWidget").classList.toggle("hidden");
}

function sendMessage() {
  const input = document.getElementById("floatingChatInput");
  const msg = input.value.trim();
  if (!msg) return;

  const messages = document.getElementById("floatingChatMessages");

  const user = document.createElement("div");
  user.className = "user-msg";
  user.innerText = msg;
  messages.appendChild(user);

  const bot = document.createElement("div");
  bot.className = "bot-msg";

  const lower = msg.toLowerCase();

if (lower.includes("exam")) {
  bot.innerText = "Mid-semester examinations begin from 20 January. Please check the exam schedule section for details.";
} 
else if (lower.includes("assignment")) {
  bot.innerText = "You have pending assignments in DBMS and OOPS. Submission details are available in the Assignments section.";
} 
else if (lower.includes("faculty") || lower.includes("teacher")) {
  bot.innerText = "DBMS is taught by Dr. Anjali Sharma. You can find complete faculty details in the Subjects section.";
} 
else if (lower.includes("semester")) {
  bot.innerText = "You are currently enrolled in Semester IV of the B.Tech IT program.";
} 
else if (lower.includes("marks") || lower.includes("performance")) {
  bot.innerText = "Your academic performance overview is displayed on the dashboard with subject-wise progress.";
} 
else if (lower.includes("help") || lower.includes("how")) {
  bot.innerText = "You can navigate through the dashboard to track subjects, assignments, exams, and academic progress.";
} 
else {
  bot.innerText =
    "I am here to assist with academic-related queries. Please refer to the dashboard sections for detailed information.";
}

  messages.appendChild(bot);
  messages.scrollTop = messages.scrollHeight;
  input.value = "";
}
