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