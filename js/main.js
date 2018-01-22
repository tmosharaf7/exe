

(function () {
      // Countdown
    	// To change date, simply edit: var endDate = January 26, 2016 20:39:00";
    	$(function() {
    	  var endDate = "January 16, 2019 04:39:00";
    	  $('.exe-countdown').countdown({
    		date: endDate,
    		render: function(data) {
    		  $(this.el).html('<div class="days"><p>' + this.leadingZeros(data.days, 2) + '</p><p> Days</p></div><div class="hour"><p>' + this.leadingZeros(data.hours, 2) + '</p><p> Hours</p></div><div class="minute"><p>' + this.leadingZeros(data.min, 2) + '</p><p> Minutes</p></div><div class="second"><p>' + this.leadingZeros(data.sec, 2) + '</p><p> Seconds</p></div>');
    		}
    	  });
    	});	
    }());






$(document).ready(function () {
          $('#imageGallery').lightSlider({
      item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 0,
        speed: 400, //ms'
        auto: false,
        loop: true,
        slideEndAnimation: true,
        pause: 2000,
 
        controls: true,
        prevHtml: '<i class="fa fa-angle-left"></i>',
        nextHtml: '<i class="fa fa-angle-right"></i>',
        thumbItem:6,
        pager: true,
        gallery: true,
        galleryMargin: 0,
        thumbMargin: 0,
 
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,
 
        responsive : [],
          });
      });








      var filterizd = $('.filtr-container').filterizr({ 

      });





      var selectIds = $('#panel1,#panel2,#panel3,#panel4');
      $(function ($) {
          selectIds.on('show.bs.collapse hidden.bs.collapse', function () {
              $(this).prev().find('.fa').toggleClass('fa-angle-right fa-angle-down');
          })
      });




      $(document).ready(function () {

          var submitIcon = $('.searchbox-icon');
          var inputBox = $('.searchbox-input');
          var searchBox = $('.searchbox');
          var isOpen = false;
          submitIcon.click(function () {
              if (isOpen == false) {
                  searchBox.addClass('searchbox-open');
                  inputBox.focus();
                  isOpen = true;
              } else {
                  searchBox.removeClass('searchbox-open');
                  inputBox.focusout();
                  isOpen = false;
              }
          });
          submitIcon.mouseup(function () {
              return false;
          });
          searchBox.mouseup(function () {
              return false;
          });
          $(document).mouseup(function () {
              if (isOpen == true) {
                  $('.searchbox-icon').css('display', 'block');
                  submitIcon.click();
              }
          });
      });

      function buttonUp() {
          var inputVal = $('.searchbox-input').val();
          inputVal = $.trim(inputVal).length;
          if (inputVal !== 0) {
              $('.searchbox-icon').css('display', 'none');
          } else {
              $('.searchbox-input').val('');
              $('.searchbox-icon').css('display', 'block');
          }
      }



      (function ($) {
          $('.skill_circle_1').circleProgress({
              value: 0.85,
              thickness: 5,
              emptyFill: "#555555",
              animation: {
                  duration: 1700,
                  easing: "circleProgressEasing"
              },
              fill: {
                  gradient: ['#E86153', '#FECB16']
              }
          }).on('circle-animation-progress', function (event, progress) {
              $(this).find('strong').html(Math.round(6587 * progress) + '<i></i>');
          });

          $('.skill_circle_2').circleProgress({
              value: 0.5,
              thickness: 5,
              emptyFill: "#555555",
              animation: {
                  duration: 1700,
                  easing: "circleProgressEasing"
              },
              fill: {
                  gradient: ['#E86153', '#FECB16']
              }
          }).on('circle-animation-progress', function (event, progress) {
              $(this).find('strong').html(Math.round(6587 * progress) + '<i></i>');
          });

          $('.skill_circle_3').circleProgress({
              value: 0.7,
              thickness: 5,
              emptyFill: "#555555",
              animation: {
                  duration: 1700,
                  easing: "circleProgressEasing"
              },
              fill: {
                  gradient: ['#E86153', '#FECB16']
              }
          }).on('circle-animation-progress', function (event, progress) {
              $(this).find('strong').html(Math.round(6587 * progress) + '<i></i>');
          });
          $('.skill_circle_4').circleProgress({
              value: 0.4,
              thickness: 5,
              emptyFill: "#555555",
              animation: {
                  duration: 1700,
                  easing: "circleProgressEasing"
              },
              fill: {
                  gradient: ['#E86153', '#FECB16']
              }
          }).on('circle-animation-progress', function (event, progress) {
              $(this).find('strong').html(Math.round(6587 * progress) + '<i></i>');
          });


      })(jQuery);

      $(document).ready(function () {
          $(".slide_all").owlCarousel({
              items: 1,
              loop: true,
              nav: true,
              navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
              dots: 0
          });
          $(".testimonials_all").owlCarousel({
              items: 1,
              loop: true,
              dots: true,
          });
          $(".portfolio_testimonial_all").owlCarousel({
              items: 2,
              loop: true,
              dots: true,
              responsive: {
                  0: {
                      items: 1
                  },
                  480: {
                      items: 1
                  },
                  768: {
                      items: 2
                  },
                  960: {
                      items: 2
                  }
              }
          });

          $(".clients").owlCarousel({
              items: 5,
              margin: 10,
              loop: true,
              nav: true,
              dots: false,
              navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
              responsive: {
                  0: {
                      items: 1
                  },
                  480: {
                      items: 3
                  },
                  768: {
                      items: 4
                  },
                  960: {
                      items: 5
                  }
              }
          });



      });

