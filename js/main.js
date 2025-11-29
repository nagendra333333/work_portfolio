document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();

    // Initialize scroll spy after header is loaded
    setTimeout(() => {
        initScrollSpy();
        initMobileMenu();
    }, 100);
});

function loadHeader() {
    const headerHTML = `
        <div class="container nav-container">
            <a href="#home" class="logo">NP.</a>
            <div class="menu-toggle" id="mobile-menu">
                <i class="fas fa-bars"></i>
            </div>
            <ul class="nav-links">
                <li><a href="#home" class="nav-link active">Home</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#experience" class="nav-link">Experience</a></li>
                <li><a href="#projects" class="nav-link">Projects</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
        </div>
    `;

    const header = document.createElement('header');
    header.innerHTML = headerHTML;
    document.body.prepend(header);

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function loadFooter() {
    const footerHTML = `
        <div class="container">
            <div class="social-links">
                <a href="mailto:prasathnagendra8@gmail.com" class="social-icon" title="Email"><i class="fas fa-envelope"></i></a>
                <a href="#" class="social-icon" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                <a href="tel:+919629236207" class="social-icon" title="Phone"><i class="fas fa-phone"></i></a>
            </div>
            <p>&copy; ${new Date().getFullYear()} Nagendra Prasath M. All rights reserved.</p>
        </div>
    `;

    const footer = document.createElement('footer');
    footer.innerHTML = footerHTML;
    document.body.append(footer);
}

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when a link is clicked
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
}

function initScrollSpy() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
}
