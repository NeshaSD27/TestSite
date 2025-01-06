// Open the sidebar
function openMenu() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("content").style.marginLeft = "250px";
    document.querySelector(".menu-icon").style.display = "none";
    document.querySelector(".close-icon").style.display = "block";
}

// Close the sidebar
function closeMenu() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("content").style.marginLeft = "0";
    document.querySelector(".menu-icon").style.display = "block";
    document.querySelector(".close-icon").style.display = "none";
}

// Show the specific page content
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));  // Hide all pages
    document.getElementById(pageId).classList.add('active'); // Show selected page
}

// Initialize with Home page visible
window.onload = function() {
    showPage('home');
}
