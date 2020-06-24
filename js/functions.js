 
$(document).ready(function(){

  $('.carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    initialSlide: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    loop: false,
    infinite: false,
    focusOnSelect:true,
  });

  
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    asNavFor: '.carousel',
    arrows: false,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    loop: false,
    // infinite: false
  });

  // Click on Card-Slider and refresh nav
  $('.carousel .slick-slide').click(function(event) {
    $('.slider-nav .slick-slide.slick-current').removeClass('slick-current');
    $(
      $('.slider-nav .slick-slide')[$(this).data('thumb')]
    ).addClass('slick-current');
  });

  //when the slick slide initializes we want to set all of our slides to the same height
  $('.carousel').on('setPosition', function () {
    jbResizeSlider();
  });
  
  //we need to maintain a set height when a resize event occurs.
  //Some events will through a resize trigger: $(window).trigger('resize');
  $(window).on('resize', function(e) {
    jbResizeSlider();
  });
  
  //since multiple events can trigger a slider adjustment, we will control that adjustment here
  function jbResizeSlider(){
    $slickSlider = $('.carousel');
    $slickSlider.find('.slick-slide').height('auto');
  
    var slickTrack = $slickSlider.find('.slick-track');
    var slickTrackHeight = $(slickTrack).height()-50;
  
    $slickSlider.find('.slick-slide').css('height', slickTrackHeight + 'px');
  }

  // Init
  $($('.card-slider')[1]).trigger('click');

});

$(document).ready(function(){

  $('.lumedic-phone-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 1,
    arrows: false,
    dots: false,
    centerMode: false,
    loop: true,
    infinite: true,
    focusOnSelect:true
  });

  
  $('.list-ic').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    asNavFor: '.lumedic-phone-slider',
    arrows: false,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    loop: true,
    infinite: true,
  });

  $('.lumedic-phone-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('li.slick-slide').removeClass('slick-current');
    $($('li.slick-slide')[nextSlide]).addClass('slick-current');
  });

  // Init
  $($('li.slick-slide')[0]).trigger('click');  
});



$(document).ready(function(){
  $("#name").change(function(){
    let val = $(this).val();
    if(val == '') {
      $(this).addClass("required");
    }else{
      $(this).removeClass("required");
    }
  });

  $("#email").change(function(){
    let val = $(this).val();
    if(val == '') {
      $(this).addClass("required");
    }else{
      $(this).removeClass("required");
    }
  });

  $(".lumedic-contact-form").submit(function(e) {
    e.preventDefault();
    e.stopPropagation();

    let error = false;
    let name = $("#name").val();
    if(name == '') {
      $("#name").addClass("required");
      error = true;
    }
    let email = $("#email").val();
    if(email == '') {
      $("#email").addClass("required");
      error = true;
    }

    if(error){
      return false;
    }

    $.ajax({
        data: $(this).serialize(),
        type: "POST",
        url: 'mailer.php', 
        success: function(data) {
          $(".message").show(); 
					$(".btn-send").hide();
        },
        error: function (data) {
          console.log(data);
        }
    });
    return false;
  });
});  