$(document).ready(function(){
    $("#head").load("meta.html");
    $("#header").load("header.html");
    $("#footer").load("footer.html");

    $('.productimg2 img').hover(function() {
        $(this).css('transform', 'scale(1.1)');
    }, function() {
        $(this).css('transform', 'scale(1)');
    });

    $('.exam img').hover(function() {
        $(this).css('transform', 'scale(1.1)');
        $(this).css('transition', 'transform 0.3s ease');
      }, function() {
        $(this).css('transform', 'scale(1)');
      });

    $('#accordian li h3').click(function(){
        var $parent = $(this).parent();
        if($parent.hasClass('active')) return;
        $('#accordian ul .row').not($(this).next()).slideUp();
        $(this).next().slideDown(function(){
          $parent.addClass('active').siblings().removeClass('active');
        });
     });

     $('form').submit(function(event) {
        event.preventDefault();
        alert('Form submitted!');
    });

    $(".btn").click(function() {
      // Display an alert when the link is clicked
      alert("Really Craving about it!");
    });
    
    $('.image img').hover(function() {
        $(this).css('transform', 'scale(1.1)');
    }, function() {
        $(this).css('transform', 'scale(1)');
    });

});
