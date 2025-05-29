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

<!-- سكربت EmailJS -->
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
  emailjs.init("rca3U6MlSNyFC_AUv"); // مفتاحك العام

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_1hghbqi", "template_i0tdm8f", this)
      .then(function() {
        alert("🎉 تم إرسال رسالتك بنجاح!");
        document.getElementById("contact-form").reset();
      }, function(error) {
        alert("❌ حدث خطأ أثناء الإرسال.");
        console.log(error);
      });
  });
</script>

<script>
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".page-section");
  let currentSection = null;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSection = section;
    }
  });

  if (currentSection) {
    if (currentSection.classList.contains("section-dark")) {
      document.body.style.backgroundColor = "#441431";
      document.body.style.color = "#DCDDD1";
    } else {
      document.body.style.backgroundColor = "#B8ADAB";
      document.body.style.color = "#441431";
    }
  }
});
</script>