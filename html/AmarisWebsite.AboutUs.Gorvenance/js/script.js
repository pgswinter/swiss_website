(function() {

  $.fn.detectScroll = function(){

    var me = $(this)
    var pageTop = $(window).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var elementTop = me.offset().top - 550;
    var elementBottom = elementTop + me.height();

    // console.log('height elem:'+me.height())
    // console.log('pageTop: '+pageTop)
    // console.log('pageBottom: '+pageBottom)
    // console.log('elementTop: '+elementTop)
    // console.log('elementBottom: '+elementBottom)

    if((pageTop >= elementTop) && (pageTop <= elementBottom)){

      return true

    }
    else{

      return false

    }

  }
   
  var lastScrollTop = 0

  $(window).on('scroll',function(){

    var currentScrollTop = $(this).scrollTop()

    if(currentScrollTop > lastScrollTop){

      $('.amc-parallax .para').each(function(i){

        var mIndex = i + 1
        if($('.para:nth-child('+mIndex+')').detectScroll() == true){

          $('.para:nth-child('+mIndex+') .anim-01').css({'transform': 'translate(0, 120px)','-webkit-transform': 'translate(0, 120px)','-ms-transform': 'translate(0, 120px)'})

        }

      })

    }else{

        $('.amc-parallax .para').each(function(i){

          var mIndex = i + 1
          if($('.para:nth-child('+mIndex+')').detectScroll() == true){

            $('.para:nth-child('+mIndex+') .anim-01').css({'transform': 'translate(0, -0)','-webkit-transform': 'translate(0, -0)','-ms-transform': 'translate(0, -0)'})

          }

        })

    }

    
    lastScrollTop = currentScrollTop
  })
  

})(jQuery);