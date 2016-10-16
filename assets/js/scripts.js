$(document).ready(function(){

    $('#nav').onePageNav();

    $('a[href^="http"]').attr('target','_blank');
    
    $('.toggle').click(function(){
        $('.overview').toggleClass('open');
    });

    // Give user the option to hide the sidebar
    $("#hide-sidebar").click(function(){
       $(".sidebar").fadeOut();
       $("#show-sidebar").show();
    })
    $("#show-sidebar").click(function(){
       $(".sidebar").fadeIn();
       $("#show-sidebar").hide();
    })

    // Navigate to link on click
    $(".post-link").click(function(){
        document.location = $(this).closest('a').attr("href");
    })

});
