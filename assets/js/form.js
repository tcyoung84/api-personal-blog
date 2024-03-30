document.addEventListener('DOMContentLoaded', function() {
    const blogForm = document.getElementById('blogForm');
    const errorMessage = document.getElementById('errorMessage');

    blogForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get the form values from the form input from user
        const username = blogForm.elements['username'].value.trim();
        const title = blogForm.elements['title'].value.trim();
        const content = blogForm.elements['content'].value.trim();

        // Check if any form field is empty
        if (!username || !title || !content) {
            errorMessage.classList.remove('hidden');
            return;
        }

        // Save blog post data to localStorage
        const post = {
            username: username,
            title: title,
            content: content
        };

        let blogPosts = localStorage.getItem('posts');
        if (!blogPosts) {
            blogPosts = [];
        } else {
            blogPosts = JSON.parse(blogPosts);
        }
        
        blogPosts.push(post);
        localStorage.setItem('posts', JSON.stringify(blogPosts));

        // Redirect to the blog page
        window.location.href = 'blog.html';
    });
});