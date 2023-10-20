$(function(){

    $("[id^='slider']").on("input", function () {
        
        const x = $(this).val();
        const color = 'linear-gradient(90deg, #00DB4A ' + x + '%, #fff ' + x + '%)';
    
        $(this).css("background", color);
    });

});
