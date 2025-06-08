$(document).ready(function(){
    $('header .gnb .depth1 > li').on('mouseenter focusin', function(){
        $('header .gnb .depth1 > li').removeClass('over')
        $(this).addClass('over')
    })

    $('header .gnb').on('mouseleave', function(){
        $('header .gnb .depth1 > li').removeClass('over')
    })

    /* news 추가 */

    $('.news > .tap > li').on('click', function(){
        $('.news > .tap > li').removeClass('active')
        $(this).addClass('active')
    })
})