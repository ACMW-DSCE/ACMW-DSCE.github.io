
let header = document.querySelector(".home");
let aboutUs = document.querySelector(".about-us");
let eventsBlock = document.querySelector(".events-block");

let moveItems = document.querySelectorAll(".move");
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll(".nav-link");

const options = {
    rootMargin : "-100px"
}


const linkObserverDarken = new IntersectionObserver( function( entries , linkObserverDarken){


    entries.forEach( entry =>{
        
        if(!entry.isIntersecting){
            navLinks.forEach( link =>{

                link.classList.add("text-light");
                navbar.classList.remove("bg-light");
                navbar.style.background = "#193574";
            });
        }else{
            navLinks.forEach( link =>{

                link.classList.remove("text-light");
                navbar.classList.add("bg-light");
                navbar.style.background = "#fff";
            });
        }
    });

} , options);

const linkObserverLighten = new IntersectionObserver( function( entries , linkObserverLighten){


    entries.forEach( entry =>{
        
        if(entry.isIntersecting){
            navLinks.forEach( link =>{

                link.classList.add("text-light");
                navbar.classList.remove("bg-light");
                navbar.style.background = "#193574";
            });

        }else{
            navLinks.forEach( link =>{

                link.classList.remove("text-light");
                navbar.classList.add("bg-light");
                navbar.style.background = "#fff";
            });
        }
    });

} , options);

const itemsObserver = new IntersectionObserver( function(entries , itemsObserver){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            entry.target.classList.remove("moveUp");
        }else{
            entry.target.classList.add("moveUp");
        }
    });
} , options);


linkObserverDarken.observe(header);
linkObserverLighten.observe(aboutUs);
linkObserverLighten.observe(eventsBlock);

moveItems.forEach( item =>{
    itemsObserver.observe(item);
})
