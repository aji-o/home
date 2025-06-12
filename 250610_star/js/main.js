$(document).ready(function(){

    //header 

    $('header .gnb > ul.depth1 > li').on('mouseenter focusin', function(){
        $('header .gnb > ul.depth1 > li').removeClass('over')
        $(this).addClass('over')
    })

        $('header .gnb > ul.depth1 > li').on('mouseleave', function(){
        $('header .gnb > ul.depth1 > li').removeClass('over')
    })

    //slide

    let idx = 1

    setInterval(() => {
        if (idx < 3){
            idx++
        }else{
            idx = 1
        }
        $('.slide ul li').removeClass('active')
        $('.slide ul li').eq(idx -1).addClass('active')
    }, 3000);


    //news

    $('.contents .news > ul > li').on('click', function(){
        $('.contents .news > ul > li').removeClass('active')
        $(this).addClass('active')
    })


    //layer_popup

    $('.contents .news > ul > li.notice > .detail > ul > li > a.popup_btn').on('click', function(){
        $('.layer_popup').show()
    })
    $('.layer_popup .close').on('click', function(){
    $('.layer_popup').hide()
    })


}) //$(document).ready