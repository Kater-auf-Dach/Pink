(function() {
  var openMenu = document.querySelector('.hamburger');
  var menuMain = document.querySelector('.main-menu');

  openMenu.addEventListener('click', function(e){
    e.preventDefault();
    menuMain.classList.toggle('main-menu--show');
  });

})();