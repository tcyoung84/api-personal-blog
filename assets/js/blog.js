document.addEventListener('DOMContentLoaded', function() {
    const toggleModeButton = document.getElementById('toggleMode');
    const blogPostsContainer = document.getElementById('blogPosts');

    // button to toggle between light and dark modes
    toggleModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    // Function to display blog posts
    function displayBlogPosts() {
        let posts = localStorage.getItem('posts');
        if (!posts) {
            blogPostsContainer.innerHTML = '<p>No blog posts found.</p>';
            return;
        }

        posts = JSON.parse(posts);
        if (posts.length === 0) {
            blogPostsContainer.innerHTML = '<p>No blog posts found.</p>';
            return;
        }

        // Function to display blog posts
    function displayBlogPosts() {
        let posts = localStorage.getItem('posts');
        if (!posts) {
            blogPostsContainer.innerHTML = '<p>No blog posts found.</p>';
            return;
        }

        posts = JSON.parse(posts);
        if (posts.length === 0) {
            blogPostsContainer.innerHTML = '<p>No blog posts found.</p>';
            return;
        }

        // Create HTML for each blog post
        const blogPostsHTML = posts.map(post => `
            <div class="post">
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p>Author: ${post.username}</p>
            </div>
        `).join('');

        // Display blog posts
        blogPostsContainer.innerHTML = blogPostsHTML;
    }

    // Call function to display blog posts when the page loads
    displayBlogPosts();
});