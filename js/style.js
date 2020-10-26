$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 100){
              $(this).addClass('active');
            }
        });
    });
});

$(function () {
    $('h1').textillate({
        loop: 'true',
        minDisplayTime: 2000,
        initialDelay: 1000,
        in:{
            effect: 'fadeInDown'
        },
        out:{
            effect: 'fadeOutDown',
            reverse:'true'
        }
    });
    $('.last-message').textillate({
        loop: 'true',
        minDisplayTime: 1000,
        initialDelay: 2000,
        in:{
            effect: 'bounce'
        },
        out:{
            effect: 'swing',
        }
    });
})
 $(function(){
        // #で始まるリンクをクリックしたら実行されます
        $('a[href^="#"]').click(function() {
          // スクロールの速度
          var speed = 400; // ミリ秒で記述
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          $('body,html').animate({scrollTop:position}, speed, 'swing');
          return false;
        });
      });
      
 $('.works-btn').on('click', function(){
    $('.works-img').toggleClass('is-active');
});