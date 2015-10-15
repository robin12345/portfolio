$(document).ready(function(){
    $(".header__menu-icon").click(function(){
       var toggle_el = $(".page__inner");
        $(toggle_el).toggleClass("page__sidebar");
        $(".part__container").click(function(){
            $(".page__inner").removeClass("page__sidebar");
        })
    });
});

