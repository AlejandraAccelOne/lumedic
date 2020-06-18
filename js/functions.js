  $(".text-rotater").textrotator({
    animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
    separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
    speed: 2000 // How many milliseconds until the next word show.
  });

  $(".rotate").textrotator({
    animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
    separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
    speed: 2000 // How many milliseconds until the next word show.
  });

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
  

  
//
// ScrollMagic
//
  	// init controller
    var controller = new ScrollMagic.Controller();

    // build scene
    var scene = new ScrollMagic.Scene(
        {triggerElement: "#lumedic-phone"})
        .setClassToggle('#lumedic-phone .innerText','white')
        .addTo(controller);
  
  
