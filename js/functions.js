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
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
  //  autoplay: true,
  //  autoplaySpeed: 1000,
  //  speed: 2000,
    //slidesToShow: 4,
    //slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    }]
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
  });
  

$(document).ready(function(){

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
        onStart: function () {$text.html(texts[0]);},
        onReverseComplete: function () {$text.html(texts[3]);}
      }
    )
    .to(".text-loader", 1, {rotation:'90',
        onStart: function () {$text.html(texts[1]);},
        onReverseComplete: function () {$text.html(texts[0]);}
      }
    )
    .to(".text-loader", 1, {rotation:'180',
        onStart: function () {$text.html(texts[2]);},
        onReverseComplete: function () {$text.html(texts[1]);}
      }
    )    
    .to(".text-loader", 1, {rotation:'270',
        onStart: function () {$text.html(texts[3]);},
        onReverseComplete: function () {$text.html(texts[2]);}
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