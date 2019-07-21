var toLeft = $('#to-left');
var toRight = $('#to-right');

var vani = 0;


toLeft.on('click', function (e) {
    /*$(this).css({
        left:"100%"
    },b);

    var b =setTimeout( () => {
        $(this).css({
            left: 0
        })
    },3000)
*/
    /*$(this).animate({
        left: "100%"
    }, 4000, function () {
        setTimeout(() => {
            $(this).animate({
                left: 0
            }, 4000)
        }, 3000)
    });*/

    vani -= 33.333;

    $('#my-slider').animate({
        left: vani + '%'
    }, 1000);
});

toRight.on('click', function (e) {
        vani += 33.333;

        $('#my-slider').animate({
            left: vani + '%'
        }, 1000);
});