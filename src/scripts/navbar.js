 import 'jquery';

(function($) {
  document.querySelector('#nav-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
  });
  $('#nav-toggle').click(function() {
    $('nav ul').toggle();
    $('.brand').toggle();
  });
})(jQuery); 