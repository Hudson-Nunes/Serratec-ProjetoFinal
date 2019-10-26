$('.menu a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;
      
    $('html, body').animate({ 
      scrollTop: targetOffset - 100
    }, 1000);
});





$(window).scroll(function() {
  // 100 = The point you would like to fade the nav in.
    
    if ($(window).scrollTop() > 450 ){
      
       $('header').addClass('show');
      
    } else {
      
      $('header').removeClass('show');
      
     };   	
  });
  
  $('.scroll').on('click', function(e){		
      e.preventDefault()
      
    $('html, body').animate({
        scrollTop : $(this.hash).offset().top
      }, 1500);
  });



  
//SCRIPT PARA OS SLIDES
  var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}