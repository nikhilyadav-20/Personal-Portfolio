function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress");
  
    progressBars.forEach(bar => {
      const targetWidth = bar.style.width;
      bar.style.width = "0"; // Start from 0%
  
      setTimeout(() => {
        bar.style.width = targetWidth;
      }, 100); // Delay to start the animation
    });
  });
  