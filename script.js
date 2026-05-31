const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // Once the section is revealed, stop observing to save resources
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));