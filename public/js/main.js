document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-out-cubic",
    once: true,
    offset: 120
  });

  let lastScrollY = window.scrollY;
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const hero = document.querySelector(".hero");

  const HEADER_LIMIT = 120;

  if (!hero) return; // hard safety

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > lastScrollY;

    if (currentScrollY <= HEADER_LIMIT) {
      scrollingDown
        ? header.classList.add("header-hide")
        : header.classList.remove("header-hide");
    } else {
      header.classList.add("header-hide");
    }

    scrollingDown
      ? nav.classList.add("nav-hide")
      : nav.classList.remove("nav-hide");

    lastScrollY = currentScrollY;
  });

  const images = [
    "../assets/images/cover/flag_ceremony_1.jpg",
    "../assets/images/cover/flag_ceremony_2.jpg",
    "../assets/images/cover/flag_ceremony_3.jpg"
  ];

  let index = 0;
  const COLOR_DELAY = 800;
  const IMAGE_DELAY = 8000;

  function cycleHero() {
    hero.style.setProperty("--hero-opacity", 0);

    setTimeout(() => {
      hero.style.setProperty(
        "--hero-img",
        `url('${images[index]}')`
      );
      hero.style.setProperty("--hero-opacity", 1);

      index = (index + 1) % images.length;
    }, COLOR_DELAY);
  }

  setTimeout(() => {
    cycleHero();
    setInterval(cycleHero, IMAGE_DELAY);
  }, 800);
});
