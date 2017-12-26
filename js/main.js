var filterizd = $('.filtr-container').filterizr({
   //options object
});





var selectIds = $('#panel1,#panel2,#panel3,#panel4');
$(function ($) {
    selectIds.on('show.bs.collapse hidden.bs.collapse', function () {
        $(this).prev().find('.fa').toggleClass('fa-angle-right fa-angle-down');
    })
});


  $(document).ready(function(){



            var submitIcon = $('.searchbox-icon');
            var inputBox = $('.searchbox-input');
            var searchBox = $('.searchbox');
            var isOpen = false;
            submitIcon.click(function(){
                if(isOpen == false){
                    searchBox.addClass('searchbox-open');
                    inputBox.focus();
                    isOpen = true;
                } else {
                    searchBox.removeClass('searchbox-open');
                    inputBox.focusout();
                    isOpen = false;
                }
            });  
             submitIcon.mouseup(function(){
                    return false;
                });
            searchBox.mouseup(function(){
                    return false;
                });
            $(document).mouseup(function(){
                    if(isOpen == true){
                        $('.searchbox-icon').css('display','block');
                        submitIcon.click();
                    }
                });
        });
            function buttonUp(){
                var inputVal = $('.searchbox-input').val();
                inputVal = $.trim(inputVal).length;
                if( inputVal !== 0){
                    $('.searchbox-icon').css('display','none');
                } else {
                    $('.searchbox-input').val('');
                    $('.searchbox-icon').css('display','block');
                }
            }



(function($) {
  $('.skill_circle_1').circleProgress({
    value: 0.85,
      thickness: 5,
      emptyFill: "#555555",
      animation: { duration: 1700, easing: "circleProgressEasing" },
    fill: {gradient: ['#E86153', '#FECB16']}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(6587 * progress) + '<i></i>');
  });

  $('.skill_circle_2').circleProgress({
    value: 0.5,
      thickness: 5,
      emptyFill: "#555555",
      animation: { duration: 1700, easing: "circleProgressEasing" },
    fill: {gradient: ['#E86153', '#FECB16']}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(6587 * progress) + '<i></i>');
  });

  $('.skill_circle_3').circleProgress({
    value: 0.7,
      thickness: 5,
      emptyFill: "#555555",
      animation: { duration: 1700, easing: "circleProgressEasing" },
    fill: {gradient: ['#E86153', '#FECB16']}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(6587 * progress) + '<i></i>');
  });
  $('.skill_circle_4').circleProgress({
    value: 0.4,
      thickness: 5,
      emptyFill: "#555555",
      animation: { duration: 1700, easing: "circleProgressEasing" },
    fill: {gradient: ['#E86153', '#FECB16']}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(6587 * progress) + '<i></i>');
  });


})(jQuery);

$(document).ready(function(){
  $(".slide_all").owlCarousel({
      items: 1,
      loop: true,
      nav: true,
  navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
      dots: 0
  });
  $(".testimonials_all").owlCarousel({
      items: 1,
      loop: 0,
      dots: true,
  });
    
    
    
});