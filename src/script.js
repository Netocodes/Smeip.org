// alert('after veiwing pls rest starkie so i can work pacefully, ps the text here is of no use its random and not well thought of.. NetoCodes')

// Force light mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('force-light-mode');
  alert("turn off dark mode on your mobile")
  window.location.href = 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3DUxs_GRhKnR8&ved=2ahUKEwjNhPOclfyHAxXjQUEAHdTEMVIQtwJ6BAgNEAI&usg=AOvVaw0BV7FF8XrQXqp-E5IaX3cY'
}



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

