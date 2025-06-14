function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleJobDetails(jobId) {
  const details = document.getElementById(jobId + '-details');
  const icon = document.getElementById(jobId + '-icon');
  
  details.classList.toggle('open');
  icon.classList.toggle('open');
  
  // Update icon text
  if (details.classList.contains('open')) {
    icon.textContent = '−';
  } else {
    icon.textContent = '+';
  }
}

