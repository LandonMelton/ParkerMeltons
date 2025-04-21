// Get the current page URL to determine which tag to filter
const pageTag = new URL(window.location.href).searchParams.get("tag"); // e.g., ?tag=sea

// Select all blog containers
const blogContainers = document.querySelectorAll(".blog-container");

// Loop through blog containers and display only those matching the tag
blogContainers.forEach(container => {
    const tag = container.getAttribute("data-tag");
    if (tag === pageTag) {
        container.style.display = "block"; // Show matching container
    } else {
        container.style.display = "none"; // Hide others
    }
});