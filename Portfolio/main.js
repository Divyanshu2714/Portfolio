var typed = new Typed('.text', {
    strings: ['Frontend Development', 'Web Development'],
    typeSpeed: 100,   
    backSpeed: 100, 
    backDelay:1000,   
    loop: true        
  });
window.onscroll = function() {
  const backToTopButton = document.querySelector(".back-to-top");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopButton.style.display = "block";
  } else {
      backToTopButton.style.display = "none";
  }
};
document.querySelector(".back-to-top").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});
var loader = document.getElementById("loader");
window.addEventListener("load", function(){
  loader.style.display = "none";
})
window.onload = function() {
  document.getElementById("loader").style.display = "none";  // Hide the loader
  document.getElementById("content").style.display = "block"; // Show the main content
};
