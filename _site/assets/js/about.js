// Sidebar Menu //

function openNav() {
  document.getElementById("mySidebar").style.transform = "translateX(280px)";
  setTimeout(function() {
      document.getElementById("overlay").style.display = "block";
      document.body.style.backgroundColor = "rgba(0,0,0,0.25)";
  }, 100);
}

function closeNav() {
  document.getElementById("mySidebar").style.transform = "translateX(-280px)";
  document.getElementById("overlay").style.display = "none";
  document.body.style.backgroundColor = "";
}

function toggleDropdown() {
  var dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.style.maxHeight = dropdownMenu.style.maxHeight ? null : dropdownMenu.scrollHeight + "px";
}

document.addEventListener('click', function(event) {
  var sidebar = document.getElementById('mySidebar');
  if (!sidebar.contains(event.target) && !document.getElementById('hamburger').contains(event.target)) {
      closeNav();
  }
});

document.getElementById('overlay').addEventListener('click', function(event) {
  event.stopPropagation();
  closeNav();
});


document.getElementById('mySidebar').addEventListener('click', function(event) {
  event.stopPropagation();
});
  
  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Call plusSlides() every 3 seconds (3000 milliseconds)
  let autoSlide = setInterval(function() { plusSlides(1); }, 3000);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active-dot";
  }