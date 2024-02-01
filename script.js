const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
document.addEventListener("DOMContentLoaded", function () {
    // Check if a style preference is stored in local storage
    const currentStyle = localStorage.getItem("currentStyle");
    if (currentStyle) {
        document.getElementById("stylesheet").href = currentStyle;
    }

    // Function to toggle between styles
    function toggleStyles() {
        const currentHref = document.getElementById("stylesheet").href;
        const newHref = currentHref.includes("stylel.css") ? "styled.css" : "stylel.css";
        document.getElementById("stylesheet").href = newHref;
        // Save the current style preference in local storage
        localStorage.setItem("currentStyle", newHref);
        // Update the icon immediately after changing the style
        updateIcon();
    }

    // Event listener for the toggleStyles button
    const toggleStylesButton = document.getElementById("toggleStyles");
    toggleStylesButton.addEventListener("click", toggleStyles);

    // Function to update the icon based on the current style
    function updateIcon() {
        const currentHref = document.getElementById("stylesheet").href;
        toggleStylesButton.innerHTML = currentHref.includes("stylel.css") ? '<i class="far fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    }

    // Call the updateIcon function on page load
    updateIcon();
});
