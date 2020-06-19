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
    arrows: false,
    dots: false,
    centerMode: true,
  });
  
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    asNavFor: '.carousel',
    arrows: false,
    dots: false,
    centerMode: true,
    focusOnSelect: true
  //,  variableWidth: true
  });
  

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