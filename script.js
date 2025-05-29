document.getElementById("signup-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const fullName = this.querySelector('input[type="text"]').value;
  const status = this.querySelector('select:nth-of-type(1)').value;
  const wilaya = this.querySelector('select:nth-of-type(2)').value;
  const phone = this.querySelector('input[type="tel"]').value;
  const email = this.querySelector('input[type="email"]').value;

  const user = { fullName, status, wilaya, phone, email };
  localStorage.setItem("revolaUser", JSON.stringify(user));

  closeSignup();

  // تحديث الواجهة
  document.querySelector(".signup-btn")?.style.display = "none";
  document.getElementById("profileIcon").style.display = "block";

  // تحديث زر Sign up في الصفحة الرئيسية إلى My account
  const signupBtnHome = document.querySelector(".home-section .signup-btn");
  if (signupBtnHome) {
    signupBtnHome.outerHTML = `<button class="my-account-btn" onclick="openAccount()">My account</button>`;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const sideMenu = document.getElementById('side-menu');
  const mainContent = document.getElementById('main-content');

  // محتوى الصفحات
  const pages = {
    home: "<h1>Home</h1><p>أهلاً بك في الصفحة الرئيسية 🌸</p>",
    about: "<h1>About Us</h1><p>هذه صفحة من نحن 💭</p>",
    services: "<h1>Services</h1><p>هنا خدماتنا 🎨</p>",
    portfolio: "<h1>Portfolio</h1><p>معرض أعمالنا هنا 🖼️</p>",
    contact: "<h1>Contact</h1><p>تواصل معنا 💌</p>",
    signup: "<h1>Sign Up</h1><p>نموذج التسجيل ✨</p>"
  };

  // عرض الصفحة عند الضغط على زر في القائمة
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const page = e.target.getAttribute('data-page');
      if (page && pages[page]) {
        mainContent.innerHTML = pages[page];
        sideMenu.classList.remove('active'); // إغلاق القائمة
      }
    });
  });

  // فتح القائمة عند الضغط على ☰
  menuBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
  });

  // زر الشعار يفتح الصفحة الرئيسية
  window.goHome = () => {
    mainContent.innerHTML = pages.home;
  };

  // عرض الصفحة الرئيسية تلقائياً أول مرة
  goHome();
});

    function openSignup() {
  document.getElementById("signup-modal").style.display = "flex";
}

function closeSignup() {
  document.getElementById("signup-modal").style.display = "none";
}
document.getElementById("signup-form").addEventListener("submit", function(e) {
  e.preventDefault(); // نمنع إعادة تحميل الصفحة

  // حفظ البيانات
  const fullName = this.querySelector('input[type="text"]').value;
  const status = this.querySelector('select:nth-of-type(1)').value;
  const wilaya = this.querySelector('select:nth-of-type(2)').value;
  const phone = this.querySelector('input[type="tel"]').value;
  const email = this.querySelector('input[type="email"]').value;

  const user = { fullName, status, wilaya, phone, email };
  localStorage.setItem("revolaUser", JSON.stringify(user)); // نخزنهم في المتصفح

  // إغلاق النافذة
  closeSignup();

  // تغيير زر Sign up في الشريط إلى صورة بروفايل
  const signupBtnNav = document.querySelector(".signup-btn");
  signupBtnNav.outerHTML = `<img src="profile-icon.png" class="profile-icon" onclick="openAccount()">`;

  // تغيير زر Sign up في الصفحة إلى "My account"
  const signupBtnHome = document.querySelector(".home-section .signup-btn");
  if (signupBtnHome) {
    signupBtnHome.outerHTML = `<button class="my-account-btn" onclick="openAccount()">My account</button>`;
  }
});

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