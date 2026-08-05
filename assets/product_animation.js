// product_animation.js - Highlight animation when arriving from homepage
document.addEventListener('DOMContentLoaded', function() {
  var params = new URLSearchParams(window.location.search);
  if (params.get('animate') === '1') {
    var els = document.querySelectorAll('.main-image, .product-title, .product-details');
    els.forEach(function(el) { el.classList.add('product-highlight'); });
    setTimeout(function() {
      els.forEach(function(el) { el.classList.remove('product-highlight'); });
    }, 2000);
  }
});
