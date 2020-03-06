$(function(){    
    
    // 검색창 팝업
    
    $('.sp-search-arrow').click(function(){

        $('.search-popup').toggle();

        $(this).toggleClass('active');

    });


    // 영역 밖 클릭 시 검색창 팝업 닫기

    $(document).click(function(e){

        /*
            만약 클래스가 search-wrap인 요소의 밖을 클릭할 경우, 
            container.has(e.target).length는 0이 반환되고
            팝업창은 닫히게 된다. 
        */
        var container = $('.search-wrap');

        if(container.has(e.target).length==0) {

            $('.search-popup').hide();
            $('.sp-search-arrow').removeClass('active');

        };

        
        

    })



   
    // 실시간 검색어 롤링

    function keyMove(){

        $('.keyword ul').animate({
            'margin-top':-20
        },function(){
            $('.keyword ul li').first().appendTo('.keyword ul');
            $('.keyword ul').css('margin-top',0);
        });

    }

    var keyPlay=setInterval(keyMove,2000);

    $('.keyword ul').on({

        mouseenter:function(){
            clearInterval(keyPlay);
            $('.keyword ul').show();
        },

        mouseleave:function(){
            keyPlay=setInterval(keyMove,2000); 
        }

    });
    


    // 연합뉴스 롤링

    function newsMove(){

        $('.rolling-news').animate({
            'margin-top':-30
        },function(){
            $('.rolling-news li').first().appendTo('.rolling-news');
            $('.rolling-news').css('margin-top',0);
        });

    }

    var newsPlay=setInterval(newsMove,3000);

    $('.rolling-news').on({

        mouseenter:function(){
            clearInterval(newsPlay);
            $('.rolling-news').show();
        },

        mouseleave:function(){
            newsPlay=setInterval(newsMove,3000); 
        }

    });

    

})