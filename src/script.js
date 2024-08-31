document.addEventListener("DOMContentLoaded", function () {
  // Show the preloader
  const preloader = document.getElementById("preloader");
  preloader.classList.remove("hidden");

  // Hide the preloader and show the content once the page has fully loaded
  window.addEventListener("load", function () {
    preloader.classList.add("hidden");
    
    // Optionally, reveal the content with a fade-in effect
    const content = document.getElementById("content");
    content.classList.remove("opacity-0");
    content.classList.add("opacity-100", "transition-opacity", "duration-500");
  });
});


  const fixedNav = document.getElementById("navigation");

document.addEventListener('scroll', () => {
    if(window.scrollY > 56){
    fixedNav.classList.add("fixed"),
    fixedNav.classList.add("top-0"),
    fixedNav.classList.add("md:bg-black/75"),
    fixedNav.classList.add("bg-black/75"),
    fixedNav.classList.add("md:py-0"),
    fixedNav.classList.add("shadow-lg")
   
}
else{
    fixedNav.classList.remove("fixed")
    fixedNav.classList.remove("top-0"),
    fixedNav.classList.remove("md:bg-black/75"),
    fixedNav.classList.remove("bg-black/75"),
    fixedNav.classList.remove("md:py-0"),
    fixedNav.classList.remove("shadow-lg")
}
});

