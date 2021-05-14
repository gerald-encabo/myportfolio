/*== Shoe Menu ==*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*== Active and Remove Menu ==*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    //Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*== Scroll Reveal Animation ==*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*== Scroll Home ==*/
sr.reveal('./home_title', {delay: 200})
sr.reveal('.button', {delay: 200})
sr.reveal('.home_img', {delay: 200})
sr.reveal('.home_social-icon', {interval: 400})

/*== Scroll About ==*/
sr.reveal('.about_img', {delay: 200})
sr.reveal('.about_subtitle', {delay: 200})
sr.reveal('.about_text', {delay: 400})

/*== Scroll Skills ==*/
sr.reveal('.skills_subtitle', {delay: 200})
sr.reveal('.skills_text', {delay: 200})
sr.reveal('.skills_data', {delay: 200})
sr.reveal('.skills_img', {delay: 400})

/*== Scroll Portfolio ==*/
sr.reveal('.portfolio_img', {interval: 200})

/*== Scroll Contact ==*/
sr.reveal('.contact_subtitle', {delay: 200})
sr.reveal('.contact_text', {delay: 200})
sr.reveal('.contact_map', {delay: 200})
sr.reveal('.contact_container', {delay : 400})