document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const nestedDropdownToggles = document.querySelectorAll(".nested-dropdown-toggle");

    dropdownToggle.addEventListener("click", function() {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    nestedDropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", function() {
            const nestedDropdown = toggle.nextElementSibling;
            nestedDropdown.style.display = nestedDropdown.style.display === "block" ? "none" : "block";
        });
    });

    // Close the dropdown if the user clicks outside of it
    document.addEventListener("click", function(event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});
