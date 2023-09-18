/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu');
const navToggle=document.getElementById('nav-toggle');
const navClose=document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll('.nav__link');
const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(nav=>{
    nav.addEventListener('click',linkAction);
})

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects=new Swiper('.projects__container',{
    loop:true,
    spaceBetween:24,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    pagination:{
        el:"swiper-pagination",
        clickable: true 
    },
    mousewheel:true,
    keyboard:true
})

/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== EMAIL JS ===============*/
//template_lktq7i4
//service_937iwcl
// dI_oJUaLNOElmZrND
const contactForm=document.getElementById('contact-form');
const contactName=document.getElementById('contact-name');
const contactEmail=document.getElementById('contact-email');
const contactMessage=document.getElementById('contact-message');
const contactResult=document.getElementById('contact-result');
const sendEmail=(e)=>{
    e.preventDefault();
    if(contactName.value=='' || contactEmail.value=='' ||  contactMessage.value==''){
        contactResult.classList.remove('color-blue');
        contactResult.classList.add('color-red');
        contactResult.textContent='Write all the input fields';
    }
    else{
        emailjs.sendForm('service_937iwcl','template_lktq7i4','#contact-form','dI_oJUaLNOElmZrND').then(()=>{
            contactResult.classList.add('color-blue');
            contactResult.textContent='Message Sent';
            setTimeout(()=>{
                contactResult.textContent='';
            },5000);
            contactName.textContent='';
            contactEmail.textContent='';
            contactMessage.textContent='';
        },(error) =>{
        alert('Something went wrong',error)})
    }
}
contactForm.addEventListener('submit',sendEmail);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections=document.querySelectorAll('section[id]');
const scrollActive=()=>{
    const scrollY=window.scrollY;
    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight;
        const sectionTop=current.offsetTop-58;
        const  sectionId=current.getAttribute('id');
        const sectionsClass=document.querySelector('.nav__menu a[href*='+sectionId);
        if(scrollY>sectionTop && scrollY<=sectionTop+sectionHeight){
            sectionsClass.classList.add('active-link');

        }
        else{
            sectionsClass.classList.remove('active-link');
        }

    })
}
window.addEventListener('scroll',scrollActive);
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up');
    this.scrollY>=350?scrollUp.classList.add('show-scroll')
    :scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp);
/*=============== DARK LIGHT THEME ===============*/ 
const themeButton=document.getElementById('theme-button');
const darkTheme='dark-theme';
const iconTheme='ri-sun-line';

const selectedTheme=localStorage.getItem('selected-item');
const selectedIcon=localStorage.getItem('selected-icon');

const getCurrentTheme=document.body.classList.contains(darkTheme)?'dark':"light";
const getCurrentIcon=themeButton.classList.contains(iconTheme)?'ri-moon-line':'ri-sun-line';

if(selectedTheme){
    document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme);
    themeButton.classList[selectedIcon==='ri-moon-line'?'add':'remove'](iconTheme);
}
themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme',getCurrentTheme);
    localStorage.setItem('selected-icon',getCurrentIcon);
})
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader=()=>{
    const header=document.getElementById('header');
    this.scrollY>=50?header.classList.add('bg-header'):
    header.classList.remove('bg-header');

}
window.addEventListener('scroll',scrollHeader)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true
})
sr.reveal(`.home__data , .projects__container , .footer__container`);
sr.reveal(`.home__Info div`,{delay:600,origin:'bottom',interval:100});
sr.reveal(`.skills__content:nth-child(1) , .contact__content:nth-child(1)`,{origin:'left'});
sr.reveal(`.skills__content:nth-child(2) , .contact__content:nth-child(2)`,{origin:'right'});
sr.reveal(`.qualification__content , .service__card`,{interval:100});