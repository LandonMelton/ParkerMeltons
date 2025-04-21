// Get the current page name (e.g., "index.html", "fish.html", or "travel.html")
const currentPage = window.location.pathname.split("/").pop().replace(".html", "");

// Define all blog containers and their tags (typically fetched from `index.html`)
const blogContainers = [
    {
        tag: "fish",
        content: `
            <div class="blog-container" data-tag="fish">
                <h2>The Tale of Alexandopher</h2>
                <p>A blog about Alexandopher the fish...</p>
            </div>
        `,
    },
    {
        tag: "travel",
        content: `
            <div class="blog-container" data-tag="travel">
                <h2>Adventure in Iceland</h2>
                <p>A travel blog about Iceland...</p>
            </div>
        `,
    },
    {
        tag: "fish",
        content: `
            <div class="blog-container" data-tag="fish">
                <h2>How to Build a Fish Tank</h2>
                <p>Instructions for creating a fish tank...</p>
            </div>
        `,
    },
    {
        tag: "travel",
        content: `
            <div class="blog-container" data-tag="travel">
                <h2>Exploring the Grand Canyon</h2>
                <p>A blog about hiking in the Grand Canyon...</p>
            </div>
        `,
    },
];

// Filter and display blog containers based on the current page
const filteredBlogs = blogContainers.filter(blog => blog.tag === currentPage);

// Insert the filtered blogs into the `#blog-posts` container
const blogPostsContainer = document.getElementById("blog-posts");
filteredBlogs.forEach(blog => {
    blogPostsContainer.innerHTML += blog.content;
});