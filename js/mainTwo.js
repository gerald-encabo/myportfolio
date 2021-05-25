/*== Active Nav Section ==*/
const sections = document.querySelectorAll('section');
const nav_active= document.querySelector('.nav_active');
const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);
function navCheck(entries) {
   
    entries.forEach(entry =>{
       const idName = entry.target.id;
       const activeAnchor = document.querySelector(`[data-page=${idName}]`);
       const coords = activeAnchor.getBoundingClientRect();
       const directions = {
           height: coords.height,
           width: coords.width,
           top: coords.top,
           left: coords.left
       };
       if(entry.isIntersecting){
            nav_active.style.setProperty("left", `${directions.left}px`);
            nav_active.style.setProperty("bottom", "0");
            nav_active.style.setProperty("width", "45px");
            nav_active.style.setProperty("height", "0.1rem");
            nav_active.style.setProperty("margin-bottom", "1.1rem");
       }
    });
}
sections.forEach(section =>{
    observer.observe(section);
}); 