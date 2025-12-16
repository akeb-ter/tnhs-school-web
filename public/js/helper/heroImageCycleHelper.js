//hero image cycle
const hero = document.querySelector(".hero");
const images = [
"../assets/images/cover/flag_ceremony_1.jpg",
"../assets/images/cover/flag_ceremony_2.jpg",
"../assets/images/cover/flag_ceremony_3.jpg"
];

let index = 0;
const COLOR_DELAY = 800;
export const IMAGE_DELAY = 8000;

export function cycleHero() {
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
