<script>
    // To show the "Sign up" under Services
    document.querySelectorAll('li').forEach(item => {
        if (item.textContent === 'Service') {
            item.addEventListener('click', () => {
                alert('Sign up');
            });
        }
    });
</script>
function toggleSignup(btn) {
  const message = document.querySelector('.signup-message');
  message.style.display = "block";
  message.textContent = `Sign up for ${btn.textContent}`;
}