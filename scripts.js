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
function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));  // Hide all pages
    document.getElementById('page' + pageNumber).classList.add('active'); // Show selected page
}

// Initialize with Page 1 visible
window.onload = function() {
    showPage(1);
}
