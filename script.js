document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Store locally
  localStorage.setItem("insta_user", username);
  localStorage.setItem("insta_pass", password);

  alert("✅ Login data stored locally!");
});
