// Get the current page name (e.g., "sea.html")
const currentPage = window.location.pathname.split("/").pop().replace(".html", ""); // e.g., "sea"

// Select all blog containers from your main blog HTML file
const allBlogs = [
    {
        tag: "fish",
        content: `
            <div class="blog-container" data-tag="fish">
                <h2>The Tale of Alexandopher</h2>
                <p>A story about Alexandopher the fish...</p>
            </div>
        `,
    },{
        tag: "plants",
        content: `
            <div class="blog-container" data-tag="plants">
                <h2>Poem and Haiku</h2>
                <p>A creative poem about turtles...</p>
            </div>
        `,
    },
];

// Filter and load only the blogs matching the current page tag
const filteredBlogs = allBlogs.filter(blog => blog.tag === currentPage);

// Insert the filtered blogs into the page
const blogPostsContainer = document.getElementById("blog-posts");
filteredBlogs.forEach(blog => {
    blogPostsContainer.innerHTML += blog.content;
});