// feather icons
feather.replace();

//toggle mobile menu
document.getElementById("btn-menu").onclick = () => {
    document.getElementById("mobile-menu").classList.toggle("hidden");
};

//observer for reveal animation
const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('show'), i * 120);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));