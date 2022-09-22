new WOW().init();

$('.about-text').click(function() {
    $('.about-info').slideToggle();
});
$('.title-work span').click(function() {
    $('.more-work').slideToggle();
});
$('.section-about').each(function() {
    var $this = $(this);
    $(this).find('.more-about span').click(function() {
        $this.find('p').slideToggle();
    }) 
});
$(".menu-toggle,.mobile-menu-toggle,.mobile-menu-overlay").on("click", function() {
    $("body").toggleClass("show-menu"), $(".overlay").fadeToggle(170)
});
$(".nav-menu-mobile").each(function() {
    var e = $(this);
    $(".header-link").clone().appendTo(e)
});
$(".top-menu-mobile").each(function() {
    var e = $(this),
        t = $(".menu-top").clone();
    t.attr("class", "top-menu-ul"), t.appendTo(e)
});
$(".nav-menu-mobile .has-sub").append('<div class="submenu-toggle"/>'), $(".nav-menu-mobile ul li .submenu-toggle").on("click", function(e) {
    $(this).parent().hasClass("has-sub") && (e.preventDefault(), $(this).parent().hasClass("show") ? $(this).parent().removeClass("show").find("> .m-sub").slideToggle(170) : $(this).parent().addClass("show").children(".m-sub").slideToggle(170))
});
      $('.tab-title li').each(function(){
        $(this).click(function(){
          $('.tab-title li.active').removeClass('active');
          $('.tab-content .tab.active').removeClass('active');
          $(this).addClass('active');
          var stt = $(this).attr('data-tab');
          setTimeout(function(){$('.tab-content #'+stt).addClass('active')},150);
        })
      })
$('.menu-pc-icon').click(function(){
  $('.menu-pc-fixed').addClass('show');
})
$('.menu-pc-close').click(function(){
  $('.menu-pc-fixed').removeClass('show');
})
$("header").each(function() {
  var e = $(this);
  if (e.length > 0) {
    var t = $(document).scrollTop(),
      a = e.offset().top,
      s = e.height(),
      r = a + s + s;
    $(window).scroll(function() {
      var s = $(document).scrollTop();
      s > r ? e.addClass("is-fixed") : (s < a || s <= 0) && e.removeClass("is-fixed"), s > t ? e.removeClass("show") : e.addClass("show"), t = s
    })
  }
})