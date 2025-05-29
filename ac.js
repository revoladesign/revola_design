function goHome() {
  window.location.href = "index.html";
}

function showSettings() {
  const user = JSON.parse(localStorage.getItem("revolaUser"));
  const dataDiv = document.getElementById("account-data");

  if (user) {
    dataDiv.innerHTML = `
      <p><strong>Full name:</strong> ${user.fullName}</p>
      <p><strong>Status:</strong> ${user.status}</p>
      <p><strong>Wilaya:</strong> ${user.wilaya}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>Email:</strong> ${user.email}</p>
    `;
  } else {
    dataDiv.innerHTML = "<p>لا توجد بيانات.</p>";
  }
}

function logout() {
  localStorage.removeItem("revolaUser");
  window.location.href = "index.html";
}