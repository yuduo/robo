/**
 * Created by Administrator on 2018/5/30 0030.
 */







$(function(){
    var nav = $('.nav_big'),
        nav_b =nav.offset();
    $(document).on('scroll',function(){
        var	nav_c = $(document).scrollTop();
        if(nav_c>0){
            nav.addClass("nav_fixed");
        }else{
            nav.removeClass("nav_fixed");
        }
    });
})

/*这是二级导航*/

$(function(){
$(".nav_third").parents(".nav_second").css({height:""});
    $(".nav_first").mouseover(function () {
        $(this).find(".nav_second").slideDown("slow");
    }).mouseleave(function(){
        $(this).find(".nav_second").slideUp("slow");
    });
})
/*这是侧滑导航*/
$(".nav_top_icon").click(function () {
    if ($(this).hasClass("phone_menu")) {
        $(this).removeClass("phone_menu");
        $(".phone_menu_nav").removeClass("phone_menu_open");
        $("#mobile_main ,.nav_left").css("margin-left", "0")
    } else {
        $(this).addClass("phone_menu");
        $(".phone_menu_nav").addClass("phone_menu_open");
        $("#mobile_main ,.nav_left").css("margin-left", "60%")
    }
});
/*这是手机导航的下拉*/
$(".phone_nav_first").click(function(){
    $(this).children(".phone_nav_second").toggle("500")
});



/*这是动画*/

$(".product-list li").each(function(i){
    $(this).attr({'data-wow-delay':i*200 + "ms"})
});
$(".app-list").each(function(i){
    $(this).attr({'data-wow-delay':i*200 + "ms"})
});
$(".product-details-main").each(function(i){
    $(this).attr({'data-wow-delay':i*200 + "ms"})
});
$(".news-li").each(function(i){
    $(this).attr({'data-wow-delay':i*200 + "ms"})
});
$(".booter_big_list").each(function(i){
    $(this).attr({'data-wow-delay':i*200 + "ms"})
});
$("#about-us .pro-series li").each(function(i){
    $(this).attr({'data-wow-delay':i*200 + "ms"})
});
$("#about-us .meaning-list").each(function(i){
    $(this).attr({'data-wow-delay':i*200 + "ms"})
});
$("#design .meaning-list").each(function(i){
    $(this).attr({'data-wow-delay':i*200 + "ms"})
});
$("#contact_us .place-list li").each(function(i){
    $(this).attr({'data-wow-delay':i*200 + "ms"})
});
$("#contact_us .email-box .email-list li").each(function(i){
    $(this).attr({'data-wow-delay':i*200 + "ms"})
});
$("#honor .honor_list").each(function(i){
    $(this).attr({'data-wow-delay':i*200 + "ms"})
});
$(function(){
    $(".ju-tab-list ul li").attr({'data-wow-delay':200 + "ms"}).css({visibility: 'visible'});
});
//招聘页面  tab
$(".ju-tab-menu a:first").addClass("active");
$(".ju-tab-list ul:first").addClass("block");
$('.ju-tab-menu a').click(function(){
    var index = $(this).index();
    $('.ju-tab-menu a').eq(index).addClass('active').siblings().removeClass('active');
    $('.ju-tab-list ul').eq(index).show().addClass('block').siblings().removeClass('block').hide();
});

