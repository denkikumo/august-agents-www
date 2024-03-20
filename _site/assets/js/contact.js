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