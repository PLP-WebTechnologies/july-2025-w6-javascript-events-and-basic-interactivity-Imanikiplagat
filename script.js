// Event Handling
const message = document.getElementById('message');
document.getElementById('clickBtn').addEventListener('click', () => {
  message.textContent = "🌟 You are doing great, keep going!";
});
document.getElementById('hoverText').addEventListener('mouseover', () => {
  message.textContent = "💡 Remember: It’s okay to rest and recharge.";
});
document.getElementById('keyInput').addEventListener('keydown', (event) => {
  message.textContent = `You typed: ${event.key}`;
});

// Light/Dark Mode
const body = document.body;
document.getElementById('themeToggle').addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');
});

// Counter
let count = 0;
document.getElementById('counterBtn').addEventListener('click', () => {
  count++;
  document.getElementById('counterBtn').textContent = `Affirmations Said: ${count}`;
});

// FAQ Toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.nextElementSibling.classList.toggle("show");
  });
});

// Form Validation
const form = document.getElementById('checkinForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const moodInput = document.getElementById('mood');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const moodError = document.getElementById('moodError');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  // Name check
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Mood check
  if (moodInput.value < 1 || moodInput.value > 10 || moodInput.value === "") {
    moodError.textContent = "Mood should be between 1 and 10";
    valid = false;
  } else {
    moodError.textContent = "";
  }

  // Success
  if (valid) {
    formMessage.textContent = "✅ Thank you for checking in. Take care of yourself!";
    formMessage.className = "success";
    form.reset();
  } else {
    formMessage.textContent = "";
  }
});
