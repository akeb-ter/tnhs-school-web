import {headerScrollHelper} from "./helper/headerScrollHelper.js";
import {cycleHero, IMAGE_DELAY} from "./helper/heroImageCycleHelper.js";
import {loadProgressBars} from "./helper/studentCountBarHelper.js";


const loadingOverlay = document.querySelector("#lazy_loading_overlay");
const body = document.querySelector("body");
// window.location.href = "#top";


document.addEventListener("DOMContentLoaded", () => {
    //after load ALL content
    loadingOverlay.style.display = "none";
    body.style.overflowY = "scroll";
    //TODO: FINISH LAZY LOADING

    //AOS
    AOS.init({
        duration: 1000,
        easing: "ease-out-cubic",
        once: false,
        offset: 120
    });

    //header/nav hide on scroll
    headerScrollHelper();
    
  //hero image cycle 
    setTimeout(() => {
        cycleHero();
        setInterval(cycleHero, IMAGE_DELAY);
    }, 800);

    //nav time update
    function updateTime() {
        const text = document.querySelector("#nav_time");

        text.textContent = `PST ${new Date().toLocaleTimeString()}`
    }

    setInterval(updateTime, 1000);

    //progress bars
    loadProgressBars();
    
});
