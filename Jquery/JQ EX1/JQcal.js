function press(str) { 
    $('#result').val($('#result').val() + str);
};

function final(str) { 
    $('#result').val(eval($('#result').val()));
};

$(document).ready(function (){
    $('#dlt').click(function(str) {
         var a = $('#result');
        a.val('')
    });
});

$(document).ready(function (){
    $('.BG').click(function(str) {
         $('body').css('background-color','#B9CFF8');
    });
});