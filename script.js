        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const icon = hamburger.querySelector('i');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Toggle between Hamburger and X icon
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        function closeMenu() {
            navMenu.classList.remove('active');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
