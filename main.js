//parralax images
var fullSizeImages = document.querySelectorAll('.entry-content .size-full');
Array.prototype.forEach.call(fullSizeImages, function(el, i){
  el.setAttribute('style', 'background-image:url('+el.getAttribute('src')+')');
});


