import {headerScrollHelper} from "./helper/headerScrollHelper.js";
import {headerMenuToggle} from "./helper/headerMenuToggle.js";

const loadingOverlay = document.querySelector("#lazy_loading_overlay");
const body = document.querySelector("body");


document.addEventListener("DOMContentLoaded", () => {
    
    //AOS
    AOS.init({
        duration: 1000,
        easing: "ease-out-cubic",
        once: false,
        offset: 120
    });
    //after load ALL content
    loadingOverlay.style.display = "none";
    body.style.overflowY = "scroll";

    //header/nav hide on scroll
    headerScrollHelper();

    //mobile nav toggle
    headerMenuToggle();

    //nav time update
    function updateTime() {
        const text = document.querySelector("#nav_time");
        
        text.textContent = `PST ${new Date().toLocaleTimeString()}`
    }

    setInterval(updateTime, 1000);
    
    
})