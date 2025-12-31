//header/nav hide on scroll
export function headerScrollHelper() {

  let lastScrollY = window.scrollY;
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const hero = document.querySelector(".hero");

  const HEADER_LIMIT = 120;

  // if (!hero) return; // hard safety

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
};