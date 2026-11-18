// 1. Dynamic Time-Based Greeting
const greetingElement = document.getElementById("greeting-text");
const currentHour = new Date().getHours();

if (currentHour < 12) {
    greetingElement.textContent = "Good Morning! Welcome to my portfolio.";
} else if (currentHour < 18) {
    greetingElement.textContent = "Good Afternoon! Welcome to my portfolio.";
} else {
    greetingElement.textContent = "Good Evening! Welcome to my portfolio.";
}

// 2. Dark / Light Theme Toggle
const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        themeToggleBtn.textContent = "Light Mode";
    } else {
        themeToggleBtn.textContent = "Dark Mode";
    }
});

// 3. Copy Email to Clipboard Interaction
const copyBtn = document.getElementById("copy-email-btn");
const statusMsg = document.getElementById("copy-status");

copyBtn.addEventListener("click", () => {
    const email = "surwadebhushan5@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        statusMsg.textContent = "Email copied to clipboard!";
        setTimeout(() => {
            statusMsg.textContent = "";
        }, 3000);
    });
});
