function openPopup() {
  document.getElementById("signup-popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("signup-popup").style.display = "none";
}

function toggleSignup(btn) {
  const message = document.querySelector('.signup-message');
  message.style.display = "block";
  message.textContent = `Sign up for ${btn.textContent}`;
}