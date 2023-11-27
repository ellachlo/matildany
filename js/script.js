$(document).ready(function(){
    let ww = $(window).width();
    layout();

    const swiper1 = new Swiper('.ban-swiper',{
        effect : 'fade',
        slidesPerView : 1,
        loop : true,
        spaceBetween : 0,
        speed : 1500,
        autoplay : {
            delay : 2000,
            disableOnInteraction : false,
        }
    });

    var typingBool = false; 
    var typingIdx=0; 
    var cr = "@";

    // 타이핑될 텍스트를 가져온다 
    var typingTxt = $(".typing-txt").text(); 

    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 

    if(typingBool==false){ 
          // 타이핑이 진행되지 않았다면 
        typingBool=true;     
        var tyInt = setInterval(typing,90);  // 반복동작 
     } 
     
     function typing(){ 
        if(typingIdx<typingTxt.length){ 
          // 타이핑될 텍스트 길이만큼 반복 
          if(cr == typingTxt[typingIdx]) $(".typing").append("<br>");
          else $(".typing").append(typingTxt[typingIdx]);
          // 한글자씩 이어준다. 
          typingIdx++; 
         } else{ 
           //끝나면 반복종료 
        clearInterval(tyInt); 
         }
      } 

    $(window).scroll(function(){
        let wh = $(window).height();
        let sct = $(window).scrollTop();

        if(sct >= 800){
            $('.top-btn').fadeIn();
        }else if(sct < 800){
            $('.top-btn').fadeOut();
        }
    });

    $('.top-btn').click(function(){
        $('html,body').animate({
            scrollTop : 0
        },500);
    });


    $(window).resize(function(){
        ww = $(window).width();
        layout();
    });
    

    function layout(){
    if(ww>=631){

        $('.m-main-menu > li').mouseenter(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        });

        $('.m-main-menu > li').mouseleave(function(){
            $(this).removeClass('active');
        });

        $('.shortcut-menu .shortcut .shortcut-m').mouseenter(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        });
    
        $('.shortcut-menu .shortcut .shortcut-m').mouseleave(function(){
            $(this).removeClass('active');
        });

        $('.sec-1-img').mouseenter(function(){
            $(this).children('.tab-menu .sec-1-con .img-hover').addClass('active')
            $(this).children('.tab-menu .sec-1-con .img-hover').siblings().removeClass('active');
        });
    
        $('.sec-1-img').mouseleave(function(){
            $(this).children('.tab-menu .sec-1-con .img-hover').removeClass('active')
        });

        $('.sec-2-con').mouseenter(function(){
            $(this).find('.sec-2-txt .top h3').addClass('active');
            $(this).find('.sec-2-txt .top h3').siblings().removeClass('active');
            $(this).find('.sec-2-txt .bottom').addClass('active');
            $(this).find('.sec-2-txt .bottom').siblings().removeClass('active');
        });
    
        $('.sec-2-con').mouseleave(function(){
            $(this).find('.sec-2-txt .bottom').removeClass('active');
            $(this).find('.sec-2-txt .top h3').removeClass('active');
        });
    
        $('.sec-2-img').mouseenter(function(){
            $('.sec-2-img').addClass('on');
            $(this).removeClass('on');
        });
    
        $('.sec-2-img').mouseleave(function(){
            $('.sec-2-img').removeClass('on');
        });

        $('.sec-4 .sec-4-con .con').mouseenter(function(){
            $(this).find('.img-hover').addClass('active');
            $(this).find('.img-hover').siblings().removeClass('active');
        });
    
        $('.sec-4 .sec-4-con .con').mouseleave(function(){
            $(this).find('.img-hover').removeClass('active');
        });
    }else{

        $('.m-main-menu > li').mouseenter(function(){
            $(this).removeClass('active');
        });
        
        $('.shortcut-menu .shortcut .shortcut-m').mouseenter(function(){
            $(this).removeClass('active');
        });
        $('.sec-1-img').mouseenter(function(){
            $(this).children('.tab-menu .sec-1-con .img-hover').removeClass('active') 
        });
        $('.sec-2-con').mouseenter(function(){
            $(this).find('.sec-2-txt .top h3').removeClass('active');
            $(this).find('.sec-2-txt .bottom').removeClass('active');
        });
        $('.sec-2-img').mouseenter(function(){
            $('.sec-2-img').removeClass('on');
        });
        $('.sec-4 .sec-4-con .con').mouseenter(function(){
            $(this).find('.img-hover').removeClass('active');
        });
    }
    }


    $(window).on('resize',function(){
        if (($(window).width() > 0) && ($(window).width() < 1120)) {   
          location.reload();  
        }
        else {  
        }
    }); 
    

    if(ww < 960){
        $('.footer .f-middle .top-line h3').click(function(){
            $('.footer .f-middle .top-line p').stop().slideUp();
            $(this).siblings('.footer .f-middle .top-line p').stop().slideToggle();
        });
    }else{

    }

    $('.menu-btn').click(function(){
        $('.m-menu-box').toggleClass('active');
    });    

    $('.menu-btn').click(function(){
        $('.menu-btn span:nth-child(1)').toggleClass('active');
        $('.menu-btn span:nth-child(2)').toggleClass('active');
    });

 




    $('.main-menu > li').mouseenter(function(){
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        $(this).find('.submenu').stop().slideDown();
    });

    $('.main-menu > li').mouseleave(function(){
        $(this).removeClass('on');
        $(this).children('.submenu').stop().slideUp();

    });

    $('.main-menu .submenu > li').mouseenter(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    $('.main-menu .submenu > li').mouseleave(function(){
        $(this).removeClass('active');
    });


    $('.tab-menu .sec-1-title h2').click(function(){

        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        const tab = $(this).attr('data-tab');

        $('.sec-1-con').siblings().removeClass('active');
        $(`#${tab}`).addClass('active');
    });

    $('.tab-menu .sec-1-con .img-hover .btn').mouseenter(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    $('.tab-menu .sec-1-con .img-hover .btn').mouseleave(function(){
        $(this).removeClass('active');
    });

    $('.top-btn').mouseenter(function(){
        $(this).addClass('active');
    });

    $('.top-btn').mouseleave(function(){
        $(this).removeClass('active');
    });




});

