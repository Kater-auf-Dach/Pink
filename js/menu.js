(function() {
  var menuToggler = document.querySelector('.hamburger');
  var hamb = document.querySelector('.hamburger--htx');
  var menuMain = document.querySelector('.main-menu');
  var topBar = document.querySelector('.page-header__top-bar');

  menuToggler.addEventListener('click', function(e){
    e.preventDefault();
    menuMain.classList.toggle('main-menu--show');
    hamb.classList.toggle('is-open');
    topBar.classList.toggle('page-header__top-bar--open');
  });

})();

