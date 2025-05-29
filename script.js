
// ⭐ عرض رسالة "Sign up" لما نضغط على عنصر "Services"
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector('.menu-icon');
  const sidebar = document.getElementById('sidebar');

  // فتح / إغلاق القائمة الجانبية عند الضغط على ☰
  menuIcon.addEventListener('click', () => {
    if (sidebar.style.right === "0px") {
      sidebar.style.right = "-250px";
    } else {
      sidebar.style.right = "0px";
    }
  });

  // عرض تنبيه لما نضغط على "Services"
  document.querySelectorAll('li').forEach(item => {
    if (item.textContent.trim() === 'Services') {
      item.addEventListener('click', () => {
        alert('Sign up');
      });
    }
  });
});

// ⭐ دالة لتعديل نص رسالة Sign up (مثلاً داخل بطاقة)
function toggleSignup(btn) {
  const message = document.querySelector('.signup-message');
  if (message) {
    message.style.display = "block";
    message.textContent = `Sign up for ${btn.textContent}`;
  }
}

<!-- سكربت EmailJS -->
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
  emailjs.init("rca3U6MlSNyFC_AUv"); // مفتاحك العام من EmailJS

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm("service_1hghbqi", "template_i0tdm8f", this)
          .then(function () {
            alert("🎉 تم إرسال رسالتك بنجاح!");
            form.reset();
          }, function (error) {
            alert("❌ حدث خطأ أثناء الإرسال.");
            console.error(error);
          });
      });
    }
  });
</script>


