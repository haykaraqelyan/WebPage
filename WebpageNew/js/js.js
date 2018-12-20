$(document).ready(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 350) {
			$(".up").css("display", "block");
		}
		else if ($(document).scrollTop() <= 350) {
			$(".up").css("display" , "none");
		}	
		$(".up").click(function() {
			$(window).scrollTop(0);				
		})
	})
	$('.up').on('click', function () {
       $('html, body').animate({scrollTop: 0}, 800);
       return false;
   });
})
$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {

      });
    }
  }
});