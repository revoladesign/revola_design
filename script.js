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

  // محتوى كل صفحة كمثال (يمكنك تعديله أو جلبه ديناميكياً)
  const pages = {
    home: `<h1>Home</h1><p>مرحباً بك في الصفحة الرئيسية!</p>`,
    about: `<h1>About Us</h1><p>هذه صفحة من نحن.</p>`,
    services: `<h1>Services</h1><p>هذه صفحة الخدمات التي نقدمها.</p>`,
    portfolio: `<h1>Portfolio</h1><p>هذا معرض الأعمال.</p>`,
    contact: `<h1>Contact</h1><p>تواصل معنا من هنا.</p>`,
    signup: `<h1>Sign Up</h1><p>قم بالتسجيل من هنا.</p>`
  };

  // افتح وأغلق القائمة عند الضغط على الثلاث خطوط
  menuBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
  });

  // التعامل مع الضغط على الروابط داخل القائمة
  sideMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      if (page && pages[page]) {
        mainContent.innerHTML = pages[page];
      }
      sideMenu.classList.remove('active'); // أغلق القائمة بعد اختيار الصفحة
    });
  });

  // افتح الصفحة الرئيسية بشكل افتراضي
  mainContent.innerHTML = pages.home;
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