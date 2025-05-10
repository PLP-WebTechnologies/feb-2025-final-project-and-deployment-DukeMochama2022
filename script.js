document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("mainNav").querySelector("ul");
  
    toggle.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent toggle click from closing the menu immediately
      navMenu.classList.toggle("show");
    });
  
    // Click outside to close
    document.addEventListener("click", (e) => {
      const isClickInside = navMenu.contains(e.target) || toggle.contains(e.target);
      if (!isClickInside) {
        navMenu.classList.remove("show");
      }
    });
  });
  