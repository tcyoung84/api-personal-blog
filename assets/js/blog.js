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

        
});