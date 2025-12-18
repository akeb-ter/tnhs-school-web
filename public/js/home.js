import {cycleHero, IMAGE_DELAY} from "./helper/heroImageCycleHelper.js";
import {loadProgressBars} from "./helper/studentCountBarHelper.js";

document.addEventListener("DOMContentLoaded", () => {  
  //hero image cycle 
    setTimeout(() => {
        cycleHero();
        setInterval(cycleHero, IMAGE_DELAY);
    }, 800);

    //progress bars for student distribution count
    loadProgressBars();
});
