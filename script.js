
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

// كود فتح وإغلاق القائمة الجانبية عند الضغط على ☰
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector('.menu-icon');
  const sidebar = document.getElementById('sidebar');

  menuIcon.addEventListener('click', () => {
    if (sidebar.style.right === "0px") {
      sidebar.style.right = "-250px";
    } else {
      sidebar.style.right = "0px";
    }
  });
});
