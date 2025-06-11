$(document).ready(function(){

    //header

    $('header .gnb ul.depth1 > li').on('mouseenter focusin', function(){
        $('header .gnb ul.depth1 > li').removeClass('over')
        $(this).addClass('over')
    })

    $('header .gnb ul.depth1 > li').on('mouseleave', function(){
        $('header .gnb ul.depth1 > li').removeClass('over')
    })


    //visual

    let idx = 1
    
    setInterval(() => {
        if(idx < 3){
            idx++
        }else{
            idx = 1
        }
        //console.log(idx)
        $('.visual ul li').removeClass('active')
        $('.visual ul li').eq(idx - 1).addClass('active')
    }, 3000);



    //news 

    $('.contents .news > ul > li').on('click', function(){
        $('.contents .news > ul > li').removeClass('active')
        $(this).addClass('active')
    })

})