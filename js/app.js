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


//  Navigation
$('nav button').on('click', showModalUl);
$('#closeModalUl').on('click', closeModalUl);

function showModalUl() {
    $('.black-overlay').css('visibility', 'visible');
    $('.black-overlay ul')
        .animate({
            opacity: 1
        }, 500, function () {
            let time = 0;
            $.each($('.black-overlay ul li'), function (i, v) {
                // console.log(i);
                //console.log($(v));
                time += 300;
                setTimeout(() => {
                    $(v).addClass('showLi');
                }, time);
                if (i % 2 === 0) {
                    console.log(v);
                    $(v).css('backgroundColor', 'rgba(82, 96, 104, 0.8)');
                }
            })
        });

    setTimeout(() => {
        $('#closeModalUl').animate({
            opacity: 1,
            top: '50px',
            right: '50px'
        })
    }, 2000)

}

function closeModalUl() {
    $('.black-overlay ul li').removeClass('showLi');
    $('#closeModalUl').css({
            opacity: 0,
            top: '30px',
            right: '30px'
        }
    );

    $('.black-overlay ul').animate({
        opacity: 0
    }, 1000, function () {
        $('.black-overlay').css('visibility', 'hidden');
    });

}