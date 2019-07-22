$(function() {
  $('.skitter-large').skitter({dots:false});
});
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({margin:20,loop:true});
});
$('.owl1').owlCarousel({
    items:1,
   margin:10,
    autoHeight:true,
    loop:true
});

$("#btnUp").click(function(){
    $("html,body").animate({scrollTop:'0'},2000)
})
$(window).scroll(function(){
    var wind=$(window).scrollTop();
    var aboutOff=$("#about").offset().top;
    var ourFoodoff=$("#ourfood").offset().top;
    var serviceoff=$("#services").offset().top;
    var serviceoff=$("#services").offset().top;
    var menuoff=$("#menu").offset().top;
    var chefsoff=$("#chefs").offset().top;
    var galleryhoff=$("#galleryh").offset().top;
    var contactoff=$("#contact").offset().top;
   
    if(wind > aboutOff-100)
        {
            $(".navbar").css("backgroundColor","black")
             $(".navbar .home1").css("color","rgba(255,255,255,.5)")
            $(".navbar .abou1").css("color","#dc3545")
        }
    else
        {
             $(".navbar").css("backgroundColor","transparent")
             $(".navbar .home1").css("color","#dc3545")
             $(".navbar .abou1").css("color","rgba(255,255,255,.5)")
        }
    if(wind> ourFoodoff-100)
        {
            $(".navbar .abou1").css("color","rgba(255,255,255,.5)")
           $(".navbar .ourf1").css("color","#dc3545") 
        }
    else
        {
           $(".navbar .ourf1").css("color","rgba(255,255,255,.5)") 
        }
    if(wind> serviceoff-100)
        {
            $(".navbar .ourf1").css("color","rgba(255,255,255,.5)")
           $(".navbar .ser").css("color","#dc3545") 
        }
    else
        {
           $(".navbar .ser").css("color","rgba(255,255,255,.5)") 
        }
     if(wind> menuoff-120)
        {
            $(".navbar .ser").css("color","rgba(255,255,255,.5)")
           $(".navbar .men").css("color","#dc3545") 
        }
    else
        {
           $(".navbar .men").css("color","rgba(255,255,255,.5)") 
        } 
    if(wind> chefsoff-120)
        {
            $(".navbar .men").css("color","rgba(255,255,255,.5)")
           $(".navbar .chef").css("color","#dc3545") 
        }
    else
        {
           $(".navbar .chef").css("color","rgba(255,255,255,.5)") 
        }
    if(wind> galleryhoff-120)
        {
            $(".navbar .chef").css("color","rgba(255,255,255,.5)")
           $(".navbar .gall").css("color","#dc3545") 
        }
    else
        {
           $(".navbar .gall").css("color","rgba(255,255,255,.5)") 
        }
    if(wind> contactoff-400)
        {
            $(".navbar .gall").css("color","rgba(255,255,255,.5)")
           $(".navbar .contact").css("color","#dc3545") 
        }
    else
        {
           $(".navbar .contact").css("color","rgba(255,255,255,.5)") 
        }
})

$(".navbar a").click(function(){
   var y= $(this).attr("href");
    var secOff=$(y).offset().top;
    $("html,body").animate({scrollTop:secOff},1000)
})

    

$("a.grouped_elements").fancybox();