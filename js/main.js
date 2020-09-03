enquire.register("screen and (max-width: 849px)", {
  match : function() {
    $(".search").prependTo(".pushy");
    $(".bmi-nav > ul").appendTo(".pushy");
  },
  unmatch : function() {
    $(".search").insertAfter(".menu-btn");
    $(".pushy > ul").appendTo(".bmi-nav");
  }
});

jQuery(document).ready(function($) {
  $(".royalSlider").royalSlider({
      // options go here
      // as an example, enable keyboard arrows nav
      keyboardNavEnabled: true
  });  
});




