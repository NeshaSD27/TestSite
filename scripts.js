// Open the sidebar
function openMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = "250px";
}

// Close the sidebar
function closeMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = "0";
}

// Show the popup
function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

// Hide the popup
function hidePopup() {
    document.getElementById("popup").style.display = "none";
}

// Function to show the selected page and hide others
function showPage(pageId) {
    // Get all pages
    const pages = document.querySelectorAll('.page');

    // Hide all pages
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }
}

// Show the home page by default when the page loads
window.onload = function() {
    showPage('home');
};
