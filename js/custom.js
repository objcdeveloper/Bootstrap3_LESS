jQuery( document ).ready(function( $ ) {
    $('select:not(.selectpicker)').selectric();

    $(".btn-more").click(function() {
    	$(this).parent().toggleClass("show-detail");
    });

    $(".overlay .btn-close").click(function() {
    	$(this).parent().parent().toggleClass("show-detail");
    });
});