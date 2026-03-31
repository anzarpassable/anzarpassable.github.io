document.addEventListener('DOMContentLoaded', function() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const previewContents = document.querySelectorAll('.preview-content');

    if (dropdownMenu) {
        dropdownMenu.addEventListener('mouseover', function(e) {
            if (e.target.tagName === 'A') {
                const category = e.target.getAttribute('data-category');
                // Hide all preview contents
                previewContents.forEach(content => {
                    content.style.display = 'none';
                });
                // Show the matching preview content
                const matchingContent = document.querySelector(`.preview-content[data-category="${category}"]`);
                if (matchingContent) {
                    matchingContent.style.display = 'block';
                }
            }
        });

        dropdownMenu.addEventListener('mouseout', function(e) {
            if (e.target.tagName === 'A') {
                // Hide all preview contents when mouse leaves
                previewContents.forEach(content => {
                    content.style.display = 'none';
                });
            }
        });
    }
});