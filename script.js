// Get the current page name (e.g., "fish.html" or "travel.html")
const currentPage = window.location.pathname.split("/").pop().replace(".html", "");

// Fetch the content of index.html
fetch("index.html")
    .then(response => response.text()) // Get the HTML content as text
    .then(html => {
        // Parse the HTML content into a DOM structure
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // Select all blog containers from the fetched HTML
        const allBlogs = doc.querySelectorAll(".blog-container");

        // Filter blog containers based on the current page's tag
        const filteredBlogs = Array.from(allBlogs).filter(blog => blog.getAttribute("data-tag") === currentPage);

        // Insert the filtered blogs into the current page
        const blogPostsContainer = document.getElementById("blog-posts");
        filteredBlogs.forEach(blog => {
            blogPostsContainer.appendChild(blog.cloneNode(true)); // Clone and append the blog
        });
    })
    .catch(error => {
        console.error("Error fetching index.html:", error);
    });