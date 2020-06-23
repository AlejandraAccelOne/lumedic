  // $(".text-rotater").textrotator({
  //   animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
  //   separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
  //   speed: 2000 // How many milliseconds until the next word show.
  // });

  // $(".rotate").textrotator({
  //   animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
  //   separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
  //   speed: 2000 // How many milliseconds until the next word show.
  // });

  $('.carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
  //  autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 1,
    arrows: false,
    dots: false,
    centerMode: false,
    loop: false,
    infinite: false,
    focusOnSelect:true
  });

  
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    asNavFor: '.carousel',
    arrows: false,
    dots: false,
    centerMode: false,
    focusOnSelect: true
  //,  variableWidth: true
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

  // $('.slider').slick({
  //   autoplay: false,
  //   dots: false,
  //   infinite: false,
  //   arrows: false,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   rows: 0
  // })
  // .on('setPosition', function (event, slick) {
  //   slick.$slides.css('height', slick.$slideTrack.height() + 'px');
  // });

$(document).ready(function(){

  var $bullets = $('.list-ic li');

  var texts = [
    'Clinical Guidance',
    'Integrated Solution Management',
    'System Integration & Engineering',
    'Lumedic.ID Technology Platform'
  ];

  var controller = new ScrollMagic.Controller();
  var $text = $('#mainTitle');
  var textChange = new TimelineMax()
    .to(".text-loader", 1, {
        rotation:'0',
        onStart: function () {$text.html(texts[0]); 
          $('.list-ic span').css('background-color','white');
          $('.list-ic li:eq(0) span').css('background-color','#302c29'); },
        onReverseComplete: function () {$text.html(texts[3]);
          $('.list-ic span').css('background-color','white');
          $('.list-ic li:eq(3) span').css('background-color','#302c29'); }
      }
    )
    .to(".text-loader", 1, {rotation:'90',
        onStart: function () {$text.html(texts[1]);
          $('.list-ic span').css('background-color','white');
          $('.list-ic li:eq(1) span').css('background-color','#302c29'); },
        onReverseComplete: function () {$text.html(texts[0]);
          $('.list-ic span').css('background-color','white');
          $('.list-ic li:eq(0) span').css('background-color','#302c29'); }
      }
    )
    .to(".text-loader", 1, {rotation:'180',
        onStart: function () {$text.html(texts[2]);
          $('.list-ic span').css('background-color','white');
          $('.list-ic li:eq(2) span').css('background-color','#302c29'); },
        onReverseComplete: function () {$text.html(texts[1]);
          $('.list-ic span').css('background-color','white');
          $('.list-ic li:eq(1) span').css('background-color','#302c29'); }
      }
    )    
    .to(".text-loader", 1, {rotation:'270',
        onStart: function () {$text.html(texts[3]);
          $('.list-ic span').css('background-color','white');
          $('.list-ic li:eq(3) span').css('background-color','#302c29'); },
        onReverseComplete: function () {$text.html(texts[2]);
          $('.list-ic span').css('background-color','white');
          $('.list-ic li:eq(2) span').css('background-color','#302c29'); }
      }
    );  

  // build scene

	var textScroll = new ScrollMagic.Scene({
		triggerElement:'#lumedic-phone',
		triggerHook:0,
		duration:$('#lumedic-phone').height()
	})
	.setTween(textChange)
  .setPin('#lumedic-phone')
  .addTo(controller);
  
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