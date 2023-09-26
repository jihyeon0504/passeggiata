//  스크롤 헤더
$(function(){
   $(document).on('scroll',function(){
    if($(window).scrollTop() > 30){
        $('header').addClass('act');
    }else{
        $('header').removeClass('act');
    }
   })
})
