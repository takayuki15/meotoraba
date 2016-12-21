$(document).ready(function() {

    $('a[href^=#]').click(function(){
        var target= $(this).attr("href");
        var webkit = !document.uniqueID && !window.opera && !window.globalStorage && window.localStorage;
        var mobile_flg = 0;
        mobile_flg = window_check();
        var y = 0;
        if(mobile_flg){var y = 80;}

        $(webkit ? 'body' : 'html').animate({
            scrollTop: $(target).offset().top -= y
            },400
        );
        return false;
    });

    function window_check(){
        var w = $(window).width();
        var x = 768;
        var z = w >= x ? true:false;
        return z;
    }

});