const hamburger = document.getElementById('hamburger');
        const menuLinks = document.getElementById('menuLinks');

        hamburger.addEventListener('click', function () {
            // Toggle active class for the cross animation
            hamburger.classList.toggle('active');
            // Toggle visibility of the menu
            menuLinks.classList.toggle('show');
        });

        function toggleMenu() {
            // Close the menu when clicking on a link
            hamburger.classList.remove('active');
            menuLinks.classList.remove('show');
        }
  