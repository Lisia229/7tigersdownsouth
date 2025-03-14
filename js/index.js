$(function() {

  /* address bar
 -------------------------------- */
 var winHeight = $(window).height();
     
 $(window).on('load resize', function(){
     var winW = $(window).width();
     var devW = 767;

     if (winW <= devW) {
         $('.sec_mainvisual .mv_slide').height(winHeight - 140);
     } else {
         $('.sec_mainvisual .mv_slide').height(winHeight - 270);
     }
 });
 
  /* first view
 -------------------------------- */
 var id = setInterval(function(){
     if($('html').hasClass('wf-active')){
         $('.js-blur-mv, .js-fadein, .js-anima').addClass('load');
     }
 }, 500);
 
 /* swiper mv
 -------------------------------- */
 setTimeout(function() {
   new Swiper('.mv_slide', {
       loop: true,
       speed: 4000,
       autoplay: {
           delay: 2000,
       },
       effect: 'fade',
       waitForTransition: false,
       
       pagination: {
           el: '.swiper-pagination',
       },
   });
 }, 1100);
 
 /* smooth scroll
-----------------------------------------*/
 $('a[href^="#"]').click(function(){
     var speed = 700;
     var href= $(this).attr("href");
     var target = $(href == "#" || href == "" ? 'html' : href);
     var position = target.offset().top;
     $("html, body").animate({scrollTop:position}, speed, "swing");
     return false;
 });
 
 /* scroll animation
 -------------------------------- */
 function fadeAnime(){

 $('.js_blur, .js-anima').each(function(){
     
     var elemPos = $(this).offset().top + 150;
     var scroll = $(window).scrollTop();
     var windowHeight = $(window).height();
     
     if (scroll >= elemPos - windowHeight){
         $(this).addClass('show');
     }
     });
 }

 $(window).scroll(function (){
     fadeAnime();
 });

 $(window).on('load', function(){
     fadeAnime();
 });
 

 /* swiper sauna・soba
 -------------------------------- */
 new Swiper('.sauna_slide, .soba_slide', {  
     loop: true,    
     navigation: {
         nextEl: ".parent-navi-next",
         prevEl: ".parent-navi-prev",
     },
 })

 new Swiper('.sauna_slide_nested', {
     loop: true,
     nested: true,
     effect: 'fade',
     navigation: {
         nextEl: ".child-navi-next",
         prevEl: ".child-navi-prev",
     },
 })

 /* accordion Flow・Q&A
 -------------------------------- */
 $(".com_accordion dt").on("click", function(){
     $(this).toggleClass('open');
     $(this).next('dd').slideToggle();
 });
 
});