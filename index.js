document.getElementById('navbarToggle').addEventListener('click', function() {
    var navbarMenu = document.getElementById('navbarMenu');
    navbarMenu.classList.toggle('active');
});


window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('back');
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});