$("#fontSize").on("input",function () {
            $('#fontArea').css("font-size", $(this).val() + "px");
    });
    
$("#fontColor").on("input",function () {
            $('#fontArea').css("font-color", "#" + $(this).val());
    });
