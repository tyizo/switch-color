$(document).ready(function(){
    $('.red').click(function(){
        $('#text1, #text2, #text3')
        .css({'color': 'rgba(156, 66, 66, 0.801)'});
        $('#icon1, #icon2, #icon3')
        .css({'color': 'rgba(156, 66, 66, 0.801)'});
    });
    $('.blue').click(function(){
        $('#text1, #text2, #text3')
        .css({'color': 'rgb(0, 159, 170)'});
        $('#icon1, #icon2, #icon3')
        .css({'color': 'rgb(0, 159, 170)'});
    });
    $('.otherColor').click(function(){
        $('#text1, #text2, #text3')
        .css({'color': 'rgb(167, 0, 97)'});
        $('#icon1, #icon2, #icon3')
        .css({'color': 'rgb(167, 0, 97)'});
    });
    $('.green').click(function(){
        $('#text1, #text2, #text3')
        .css({'color': 'rgba(3, 202, 53, 0.781)'});
        $('#icon1, #icon2, #icon3')
        .css({'color': 'rgba(3, 202, 53, 0.781)'});
    });
    $('.otherColor2').click(function(){
        $('#text1, #text2, #text3')
        .css({'color': 'rgb(22, 0, 73)'});
        $('#icon1, #icon2, #icon3')
        .css({'color': 'rgb(22, 0, 73)'});
    });

    $(document).ready(function(){
        $('#checkbox').click(function(){
            var element = document.body;         
            element.classList.toggle('dark'); 
        });
    });            
});


