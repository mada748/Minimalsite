
const SCROLL_DISTANCE = 700; 


const startR = 26;
const startG = 26;
const startB = 26;

const endR = 0;
const endG = 0;
const endB = 0; 

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
