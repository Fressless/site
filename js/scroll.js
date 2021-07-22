function slowScroll (id){
    var offset = 60;
    $('html, body').animate({
        scrollTop: $(id).offset ().top - offset
    }, 500);
    return false;
}