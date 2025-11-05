$('body').on('click','.accordion-head',function(){
    $(this).closest('.sports-accordion').toggleClass("active");
});


var windowWidth = $(window).width();

if (windowWidth >= 0 && windowWidth <= 990) {
    if($('header').hasClass('before-login-header')) {
        $('body').on('click', '.rightDrawerIcon', function() {
            $('.primaryToolbar, .secondaryToolbar').addClass('z-index-update')
        });

        $('body').on('click', '.rightDrawerIconClose', function() {
            $('.primaryToolbar, .secondaryToolbar').removeClass('z-index-update')
        });
    }
}
