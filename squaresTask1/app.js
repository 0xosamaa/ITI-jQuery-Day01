const squares = $('div');

squares.click(function () {
    $('body').append($(this).clone(true));
});
