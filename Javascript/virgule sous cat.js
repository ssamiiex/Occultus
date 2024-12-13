$(function(){
    $('[class^=lienssousforums]').each(function(){
        $(this).html($(this).html().replace(/<\/a>,/ig, '</a>  '));
    });
});