document.addEventListener('DOMContentLoaded', function () {

    // --- Header Logic ---
    const header = document.getElementById('header');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Handle header style on scroll
    window.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > 50;
        header.classList.toggle('bg-white/90', isScrolled);
        header.classList.toggle('shadow-lg', isScrolled);
        header.classList.toggle('backdrop-blur-sm', isScrolled);
        header.classList.toggle('bg-transparent', !isScrolled);

        const headerLinks = header.querySelectorAll('a, button');
        headerLinks.forEach(link => {
            link.classList.toggle('text-white', !isScrolled);
            link.classList.toggle('text-gray-200', !isScrolled);
            link.classList.toggle('hover:text-white', !isScrolled);
            link.classList.toggle('text-[#C51A1A]', isScrolled);
            link.classList.toggle('text-gray-700', isScrolled);
            link.classList.toggle('hover:text-[#C51A1A]', isScrolled);
        });
    });
    
    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // --- Intersection Observer for Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animated-section, .animated-item').forEach(el => {
        observer.observe(el);
    });

    // --- Data for Dynamic Sections ---
    const sectors = ["Healthcare", "Education", "Hospitality", "Churches", "Historic Renovations", "Retail"];
    const features = [
        { title: "90% Repeat Business", description: "Our client loyalty is a testament to our commitment to quality, integrity, and reliability.", icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>` },
        { title: "National Reach, Local Presence", description: "Licensed in 23 states, our aviation division ensures prompt site visits and seamless project coordination.", icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>` },
        { title: "Budget-Aware Execution", description: "We specialize in value engineering to bring projects back into budget without compromising quality.", icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>` },
    ];
    const projects = [
        { title: "Historic Church Restoration", image: "https://images.unsplash.com/photo-1508361020948-a9032b455c45?q=80&w=1974&auto=format&fit=crop" },
        { title: "Multi-State Restaurant Rollout", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" },
        { title: "Community Hospital Wing", image: "https://images.unsplash.com/photo-1629904853716-f0bc64219b1b?q=80&w=2070&auto=format&fit=crop" }
    ];

    // --- Populate Grids ---
    const sectorsGrid = document.getElementById('sectors-grid');
    sectors.forEach((sector, index) => {
        const item = document.createElement('div');
        item.className = 'text-center animated-item';
        item.style.transitionDelay = `${index * 0.1}s`;
        item.innerHTML = `
            <div class="flex items-center justify-center w-24 h-24 mx-auto mb-4 bg-white/10 rounded-full border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5v12m3-12v12" /></svg>
            </div>
            <h3 class="font-semibold text-gray-200">${sector}</h3>
        `;
        sectorsGrid.appendChild(item);
        observer.observe(item);
    });

    const whyClarkGrid = document.getElementById('why-clark-grid');
    features.forEach((feature, index) => {
        const card = document.createElement('div');
        card.className = 'bg-gray-50 p-8 rounded-lg border border-gray-200 animated-item';
        card.style.transitionDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="flex items-center justify-center w-16 h-16 mb-6 bg-red-100 rounded-full text-[#C51A1A]">${feature.icon}</div>
            <h3 class="text-xl font-bold text-[#1F2937] mb-3 font-poppins">${feature.title}</h3>
            <p class="text-gray-600">${feature.description}</p>
        `;
        whyClarkGrid.appendChild(card);
        observer.observe(card);
    });

    const projectsGrid = document.getElementById('projects-grid');
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'group relative h-96 rounded-lg overflow-hidden shadow-lg animated-item';
        card.style.transitionDelay = `${index * 0.15}s`;
        card.innerHTML = `
            <div class="overflow-hidden h-full">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-6">
                <h3 class="text-white text-xl font-bold font-poppins">${project.title}</h3>
            </div>
        `;
        projectsGrid.appendChild(card);
        observer.observe(card);
    });
});
