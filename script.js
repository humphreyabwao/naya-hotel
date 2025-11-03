// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    
    // Add scrolled class to navbar
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Prevent default scroll behavior on page load
window.addEventListener('load', () => {
    if (window.location.hash) {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 1);
    }
});

// Hero Image Slider - Seamless Auto-Play
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const serviceNames = document.querySelectorAll('.service-name');
const totalSlides = slides.length;

// Function to show specific slide
function showSlide(index) {
    // Remove active class from all slides and service names
    slides.forEach(slide => slide.classList.remove('active'));
    serviceNames.forEach(name => name.classList.remove('active'));

    // Add active class to current slide
    slides[index].classList.add('active');
    serviceNames[index].classList.add('active');
}

// Function to go to next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Auto slide every 5 seconds - seamless and continuous
setInterval(nextSlide, 5000);

// Promo Carousel Animation
let currentPromoSlide = 0;
const promoSlides = document.querySelectorAll('.promo-slide');
const totalPromoSlides = promoSlides.length;

function showPromoSlide(index) {
    promoSlides.forEach(slide => slide.classList.remove('active-promo'));
    promoSlides[index].classList.add('active-promo');
}

function nextPromoSlide() {
    currentPromoSlide = (currentPromoSlide + 1) % totalPromoSlides;
    showPromoSlide(currentPromoSlide);
}

// Auto-rotate promo carousel every 4 seconds
if (promoSlides.length > 0) {
    setInterval(nextPromoSlide, 4000);
}


// Image Zoom Modal for Services
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');

// Add click event to all service images
document.querySelectorAll('.service-image').forEach(imageContainer => {
    imageContainer.addEventListener('click', function() {
        const img = this.querySelector('img');
        modal.classList.add('active');
        modalImg.src = img.src;
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });
});

// Close modal when clicking the X
modalClose.addEventListener('click', function() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
});

// Close modal when clicking outside the image
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Restaurants Food Slider
let currentRestaurantSlide = 0;
const restaurantSlides = document.querySelectorAll('.restaurants-slide');
const sliderDots = document.querySelectorAll('.slider-dot');
const totalRestaurantSlides = restaurantSlides.length;

// Function to show specific restaurant slide
function showRestaurantSlide(index) {
    restaurantSlides.forEach(slide => slide.classList.remove('active'));
    sliderDots.forEach(dot => dot.classList.remove('active'));
    
    restaurantSlides[index].classList.add('active');
    sliderDots[index].classList.add('active');
}

// Function to go to next restaurant slide
function nextRestaurantSlide() {
    currentRestaurantSlide = (currentRestaurantSlide + 1) % totalRestaurantSlides;
    showRestaurantSlide(currentRestaurantSlide);
}

// Auto slide every 4 seconds
setInterval(nextRestaurantSlide, 4000);

// Click on dots to change slide
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentRestaurantSlide = index;
        showRestaurantSlide(currentRestaurantSlide);
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // You can add your form submission logic here
    // For now, just show a success message
    alert('Thank you for your enquiry! We will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Automated Reviews Slider
const reviews = [
    {
        text: "Exceptional service and beautiful rooms. Highly recommended!",
        name: "Sarah M."
    },
    {
        text: "The staff were incredibly welcoming and professional. Perfect stay!",
        name: "John D."
    },
    {
        text: "Amazing conference facilities and delicious restaurant food!",
        name: "Patricia K."
    },
    {
        text: "Best hotel experience in Bondo. Will definitely come back!",
        name: "Michael O."
    },
    {
        text: "Clean, comfortable, and great value for money. Five stars!",
        name: "Grace A."
    }
];

let currentReview = 0;

function updateReview() {
    const reviewSlide = document.querySelector('.review-slide');
    if (reviewSlide) {
        reviewSlide.style.animation = 'none';
        setTimeout(() => {
            reviewSlide.querySelector('.review-text').textContent = `"${reviews[currentReview].text}"`;
            reviewSlide.querySelector('.reviewer-name').textContent = `- ${reviews[currentReview].name}`;
            reviewSlide.style.animation = 'fadeInOut 8s';
            currentReview = (currentReview + 1) % reviews.length;
        }, 50);
    }
}

// Change review every 8 seconds
setInterval(updateReview, 8000);

// Counter Animation
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for Stats Counter
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe the stats section when it loads
const statsSection = document.querySelector('.reviews-stats-section');
if (statsSection) {
    statsObserver.observe(statsSection);
}
