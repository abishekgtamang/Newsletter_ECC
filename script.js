const pages = document.querySelectorAll('.page-wrap');
const navigation = document.querySelectorAll('.page-nav a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const page = entry.target;
      const link = document.querySelector(`.page-nav a[href="#${page.id}"]`);

      if (entry.isIntersecting) {
        page.classList.add('is-visible');
        navigation.forEach((item) => item.removeAttribute('aria-current'));
        link?.setAttribute('aria-current', 'page');
      } else {
        // Removing this class means the entrance animation plays on every return visit.
        page.classList.remove('is-visible');
      }
    });
  },
  { threshold: 0.28 }
);

pages.forEach((page) => observer.observe(page));
