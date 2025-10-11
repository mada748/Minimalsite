
const SCROLL_DISTANCE = 700; 

const startR = 0;
const startG = 0;
const startB = 0;

const endR = 178;
const endG = 221;
const endB = 255; 

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;


    let ratio = Math.min(scrollY / SCROLL_DISTANCE, 1);
    
    const r = Math.round(startR + (endR - startR) * ratio);
    const g = Math.round(startG + (endG - startG) * ratio);
    const b = Math.round(startB + (endB - startB) * ratio);

    
    const newColor = `rgb(${r}, ${g}, ${b})`;
    
    document.documentElement.style.setProperty('--bg-color', newColor);
});


window.dispatchEvent(new Event('scroll'));
