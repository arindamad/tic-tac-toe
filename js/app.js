var winner=null;
var baseVal = 0;
$('.eachTicktacbox').on('click', function(){
    if($(this).attr('data-print') != 'true' && winner!=true){
        if(baseVal%2==0){
            $(this).attr('data-print', true).attr('data-mark', '0').html('<div class="innrTictack"><img src="images/circle.svg"></\div>');
            setTimeout(
                function(){$(this).find('img').addClass('bigger')
                }, 1000);
            chakingFunction('0');
        }else{
            $(this).attr('data-print', true).attr('data-mark', 'x').html(`<div class="innrTictack"><img src="images/cross.svg"></\div>`);
            chakingFunction('x');
        }
        baseVal++;
    }   
});


// for chaking step

function chakingFunction(elem){
    // alert(elem);
    var divEses = $('.eachTicktacbox');
    console.log(elem);
    if(divEses.eq(0).attr('data-mark') == elem && divEses.eq(1).attr('data-mark') == elem && divEses.eq(2).attr('data-mark') == elem ){
        $('.winner').show().html('The winner is '+ elem);
        $('.winnerLine').css({'width': '100%', 'height':'10px', 'top' : '45px'}).fadeIn();
        winner=true;       
    }else if(divEses.eq(3).attr('data-mark') == elem && divEses.eq(4).attr('data-mark') == elem && divEses.eq(5).attr('data-mark') == elem ){
        $('.winner').show().html('The winner is '+ elem);
        $('.winnerLine').css({'width': '100%', 'height':'10px', 'top' : '145px'}).fadeIn();
        winner=true;       
    }else if(divEses.eq(6).attr('data-mark') == elem && divEses.eq(7).attr('data-mark') == elem && divEses.eq(8).attr('data-mark') == elem ){
        $('.winner').show().html('The winner is '+ elem);
        $('.winnerLine').css({'width': '100%', 'height':'10px', 'top' : '245px'}).fadeIn();
        winner=true;
    }else if(divEses.eq(2).attr('data-mark') == elem && divEses.eq(4).attr('data-mark') == elem && divEses.eq(6).attr('data-mark') == elem ){
        $('.winner').show().html('The winner is '+ elem);
        $('.winnerLine').css({'transform': 'rotate(45deg)', 'left': '145px'}).fadeIn();
        winner=true;
    }else if(divEses.eq(0).attr('data-mark') == elem && divEses.eq(4).attr('data-mark') == elem && divEses.eq(8).attr('data-mark') == elem ){
        $('.winner').show().html('The winner is '+ elem);
        $('.winnerLine').css({'transform': 'rotate(-45deg)', 'left': '145px'}).fadeIn();
        winner=true;
    }else if(divEses.eq(0).attr('data-mark') == elem && divEses.eq(3).attr('data-mark') == elem && divEses.eq(6).attr('data-mark') == elem ){
        $('.winner').show().html('The winner is '+ elem);
        $('.winnerLine').css({'left': '45px'}).fadeIn();
        winner=true;
    }else if(divEses.eq(1).attr('data-mark') == elem && divEses.eq(4).attr('data-mark') == elem && divEses.eq(7).attr('data-mark') == elem ){
        $('.winner').show().html('The winner is '+ elem);
        $('.winnerLine').css({'left': '145px'}).fadeIn();
        winner=true;
    }else if(divEses.eq(2).attr('data-mark') == elem && divEses.eq(5).attr('data-mark') == elem && divEses.eq(8).attr('data-mark') == elem ){
        $('.winner').show().html('The winner is '+ elem);
        $('.winnerLine').css({'left': '245px'}).fadeIn();
        winner=true;
    }else if($('[data-print="true"]').length == 9){
        $('.winner').show().html('Please try again');
    }
}