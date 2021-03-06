/*global window, jQuery, document, $, console*/

(function ($) {
    "use strict";
    // Add smooth scrolling to all links in navbar
    $(".navbar a.smooth-scroll, a.mouse-hover, .overlay-detail a").on('click', function (event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function () {
            window.location.hash = hash;
        });
    });
})(jQuery);
/*start scroll top button*/

/* start scroll navigation */
$(document).ready(function () {
    "use strict";
    var scrollTop = 0;
    
    var win = $(window).width();
    
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        $('.counter').html(scrollTop);

        if (scrollTop >= 200) {
            $('.navbar-header a').removeClass('brand-scrolled').addClass('navbar-brand').css("transition","all .6s ease-in-out");
            $('#top').fadeOut("fast");
            $('.navbar-default').css({
                top: "0",
            });
        } else if (scrollTop < 200) {
            $('.navbar-header a').addClass('brand-scrolled').removeClass('navbar-brand').css("transition","all .6s ease-in-out");
            $('#top').fadeIn("fast");
            $('.navbar-default').css({
                top: "40px",
            });
        }
        
        if (scrollTop < 200 && win <= 786) {
            $('.navbar-default').css({
                top: "76px"
            });
        }

    });
  
});
/* end scroll navigation */

//cashing the button to use it 
var scrollButton = $("#scroll-top");

$(window).on("scroll", function () {
    "use strict";
    if ($(this).scrollTop() >= 700) {
        
        scrollButton.show();
    } else {
        
        scrollButton.hide();
    }
//this is the shortcut for if condition
//$(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
});

scrollButton.click(function () {
    "use strict";
    $("html,body").animate({scrollTop : 0}, 600);
});
/*end scroll top button*/


/* start header for video */
  var mobCheck = false;

  (function checkIfMobile(){
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))mobCheck = true})(navigator.userAgent||navigator.vendor||window.opera);
    return mobCheck;
  })();

  var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/player_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var tv,
    playerDefaults = {autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};
  var vid = {'videoId': 'mJdchZqLXWQ', 'suggestedQuality': 'hd1080', 'startSeconds': 1, 'endSeconds': 66};

  function onYouTubePlayerAPIReady(){
    tv = new YT.Player('tv', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
  }

  function onPlayerReady(){
    tv
      .loadVideoById(vid)
      .seekTo(Math.floor(Math.random() * (180 - 1 + 1)))
      .mute();
  }

  function onPlayerStateChange(e){
    if (e.data === 1){
      $('#tv, .cover').addClass('on');
    } else if (e.data === 0){
      tv.seekTo(vid.startSeconds);
    }
  }

  function vidRescale(){

    var w = $(window).width(),
      h = $(window).height();

    if (w/h > 16/9){
      tv.setSize(w, w/16*9);
      $('.tv .screen').css({'left': '0px'});
    } else {
      tv.setSize(h/9*16, h);
      $('.tv .screen').css({'left': -($('.tv .screen').outerWidth()-w)/2});
    }
  }

  $(document).on('ready', function(){

    if (mobCheck){
      $('.tv .screen, .cover').addClass('off');
    }

    $('button').on('click', function(e){
      e.stopPropagation();
      $('button').removeClass('on');
      $(this).toggleClass('on');
      $('.rocks, .info, .tv').addClass('on');
    });

    $('button:first-of-type').on('click', function(){
      $('.info > div').removeClass('on');
      $('.about-us').addClass('on');
    });

    $('button:last-of-type').on('click', function(){
      $('.info > div').removeClass('on');
      $('.contact-us').addClass('on');
    });

    $('.info').on('click', function(e){
      e.stopPropagation();
    });

    $('html, .info > i').on('click', function(){
      $('button, .rocks, .info, .tv, .about-us, .contact-us').removeClass('on');
    });
  });

  $(window)
    .on('load', function(){
      vidRescale();
      $('.rocks').children().addClass('show');
    })
    .on('resize', function(){
      vidRescale();
    });

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-59016839-1', 'auto');
  ga('send', 'pageview');
/* end header for video */

/*start product section*/
$(document).ready(function(){
    var articles = $('article > .item-wrapper'),
    lightingRgb = '255,255,255';

    articles.mousemove(function(e) {
      var current = $(this),
          x = current.width() - e.offsetX * 2,
          y = current.height() - e.offsetY * 2,
          rx = -x / 30,
          ry = y / 24,
          deg = Math.atan2(y, x) * (180 / Math.PI) + 45;
      current.css({"transform":"scale(1.05) rotateY("+rx+"deg) rotateX("+ry+"deg)"});
      $('figure > .lighting',this).css('background','linear-gradient('+deg+'deg, rgba('+lightingRgb+',0.32) 0%, rgba('+lightingRgb+',0) 100%)');
    });

    articles.on({
      'mouseenter':function() {
        var current = $(this);
        current.addClass('enter ease').removeClass("leave");
        setTimeout(function(){
          current.removeClass('ease');
        }, 280);
      },
      'mouseleave':function() {
        var current = $(this);
        current.css({"transform":"rotate(0)"});
        current.removeClass('enter').addClass("leave");
        $('figure > .lighting',this).removeAttr('style');
      }}
    );
    

    
});

/*end product section*/

/* strat clients section */
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 7,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1200,
        arrows: false,
        dots: false,
            pauseOnHover: false,
            responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});
/* end clients section */

/* start blog page */
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
 });





var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}
/* end blog page */

/* start product page */
var shuffleme = (function( $ ) {
  'use strict';
  var $grid = $('#grid'), //locate what we want to sort 
      $filterOptions = $('.portfolio-sorting li'),  //locate the filter categories
      $sizer = $grid.find('.shuffle_sizer'),    //sizer stores the size of the items

  init = function() {

    // None of these need to be executed synchronously
    setTimeout(function() {
      listen();
      setupFilters();
    }, 100);

    // instantiate the plugin
    $grid.shuffle({
      itemSelector: '[class*="col-"]',
      sizer: $sizer    
    });
  },

      

  // Set up button clicks
  setupFilters = function() {
    var $btns = $filterOptions.children();
    $btns.on('click', function(e) {
      e.preventDefault();
      var $this = $(this),
          isActive = $this.hasClass( 'active' ),
          group = isActive ? 'all' : $this.data('group');

      // Hide current label, show current label in title
      if ( !isActive ) {
        $('.portfolio-sorting li a').removeClass('active');
      }

      $this.toggleClass('active');

      // Filter elements
      $grid.shuffle( 'shuffle', group );
    });

    $btns = null;
  },

  // Re layout shuffle when images load. This is only needed
  // below 768 pixels because the .picture-item height is auto and therefore
  // the height of the picture-item is dependent on the image
  // I recommend using imagesloaded to determine when an image is loaded
  // but that doesn't support IE7
  listen = function() {
    var debouncedLayout = $.throttle( 300, function() {
      $grid.shuffle('update');
    });

    // Get all images inside shuffle
    $grid.find('img').each(function() {
      var proxyImage;

      // Image already loaded
      if ( this.complete && this.naturalWidth !== undefined ) {
        return;
      }

      // If none of the checks above matched, simulate loading on detached element.
      proxyImage = new Image();
      $( proxyImage ).on('load', function() {
        $(this).off('load');
        debouncedLayout();
      });

      proxyImage.src = this.src;
    });

    // Because this method doesn't seem to be perfect.
    setTimeout(function() {
      debouncedLayout();
    }, 500);
  };      

  return {
    init: init
  };
}( jQuery ));

$(document).ready(function()
{
  shuffleme.init(); //filter portfolio
});
/* end product page */





