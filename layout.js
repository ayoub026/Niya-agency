function loadHTML(id, file, callback) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    })
    .catch((err) => console.error("Kan " + file + " niet laden:", err));
}

// Header inladen
loadHTML("header", "header.html", () => {
  // Active link highlight
  document.querySelectorAll(".navbar a").forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });

  // 🔥 Hamburger functionaliteit NA inladen header
  const toggleBtn = document.getElementById("nav-toggle");
  const navbar = document.getElementById("navbar");

  if (toggleBtn && navbar) {
    toggleBtn.addEventListener("click", () => {
      navbar.classList.toggle("active");
      toggleBtn.classList.toggle("active");
    });
  }
});

// Footer inladen
loadHTML("footer", "footer.html");
