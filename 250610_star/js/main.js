$(document).ready(function(){
    $('header .gnb > ul.depth1 > li').on('mouseenter focusin', function(){
        $('header .gnb > ul.depth1 > li').removeClass('over')
        $(this).addClass('over')
    })

        $('header .gnb > ul.depth1 > li').on('mouseleave', function(){
        $('header .gnb > ul.depth1 > li').removeClass('over')
    })

    //header -menu_over

    $('header').on('mouseenter', function(){
        $('header').removeClass('menu_over')
        $(this).addClass('menu_over')
    })

    $('.slide ul li').on('mouseenter', function(){
        $('header').removeClass('menu_over')
    })


    //header -end


    let idx = 1

    setInterval(() => {
        if (idx < 3){
            idx++
        }else{
            idx = 1
        }

        $('.slide ul li').eq(idx-1).addClass('active')

    }, 3000);

    //slide -end 서서히 다른걸로 바뀌는거

    $('.contents .news > ul > li').on('click', function(){
        $('.contents .news > ul > li').removeClass('active')
        $(this).addClass('active')
    })

    //contents -end

    $('.detail .popup_btn').on('click', function(){
        $('.layer_popup').show()
    })

    $('.layer_popup .close button').on('click', function(){
        $('.layer_popup').hide()
    })

})