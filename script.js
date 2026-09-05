document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav-links");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
  }

  // Cart
  let cartCount = Number(localStorage.getItem("autobladeCart") || 0);
  const updateCart = () => document.querySelectorAll(".cart-count").forEach(el => el.textContent = cartCount);
  updateCart();

  document.addEventListener("click", (event) => {
    const btn = event.target.closest(".add-to-cart");
    if (!btn) return;
    cartCount++;
    localStorage.setItem("autobladeCart", cartCount);
    updateCart();
    btn.textContent = "✓ به سبد اضافه شد";
    setTimeout(() => btn.textContent = "افزودن به سبد", 1400);
  });

  // Product filters
  const filters = document.querySelectorAll(".filter");
  const products = document.querySelectorAll(".product-card[data-category]");
  filters.forEach(filter => {
    filter.addEventListener("click", () => {
      filters.forEach(f => f.classList.remove("active"));
      filter.classList.add("active");
      const value = filter.dataset.filter;
      products.forEach(product => {
        product.style.display = value === "all" || product.dataset.category === value ? "" : "none";
      });
    });
  });

  // Service booking
  document.addEventListener("click", (event) => {
    const btn = event.target.closest(".book-service");
    if (!btn) return;
    const service = btn.dataset.service;
    window.location.href = `contact.html?service=${encodeURIComponent(service)}`;
  });

  // Contact form
  const form = document.querySelector(".contact-form");
  if (form) {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");
    const select = form.querySelector("select");
    if (service && select) {
      [...select.options].forEach(option => {
        if (option.textContent.includes(service.split(" ")[0])) option.selected = true;
      });
    }
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("درخواست شما ثبت شد. به‌زودی با شما تماس می‌گیریم.");
      form.reset();
    });
  }
});