const initApp = ()=>{
    const hamburgerButton = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("mobile-menu");
    // console.log(hamburgerButton,mobileMenu);
    
    const toggleMenu = ()=>{
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamburgerButton.classList.toggle("toggle-btn");
    }

    hamburgerButton.addEventListener("click",toggleMenu);
    mobileMenu.addEventListener("click",toggleMenu); 
    };
    
    document.addEventListener("DOMContentLoaded",initApp);

   
