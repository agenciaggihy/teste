let height = Number($('.vector.white').css('height').replace('px', ''))
$('.concrete .profile-container').css('top', `${(height + 20)}px`).css('display', 'block').css('text-align', 'center')
setTimeout(() => {
    $('div.logo').css('top', '18px')
    setTimeout(() => {
        $('div.logo').css('top', '18px').css('transform', 'rotate(0deg)');
    }, 500);
}, 200);

$('#historico').on('click', () => {
    $('#historico').css('display', 'none')
    $('#profile').css('display', 'inline-block')
    $('.concrete .profile-container').css('opacity', '0')
    setTimeout(() => {
        $('.resumo').css('margin-top', `${(height)}px`)
        $('.resumo .text').css('opacity', 0)
        setTimeout(() => {
            $('.resumo .text').css('display', 'none')
        }, 150);
        $('.logo-profile .vector.profile').css('margin-top', '-700px')
    }, 150);
    setTimeout(() => {
        $('.logo-profile .vector.white').css('background', '#f2f2f2')
        $('.historico').css('display', 'flex')
        setTimeout(() => {
            $('.historico').css('opacity', '1')
            $('.profile-container').css('display', 'none')
        }, 500);
    }, 500);
})

let margintop = $('.logo-profile .vector.profile').css('margin-top')
$('#profile').on('click', () => {
    $('#profile').css('display', 'none')
    $('#historico').css('display', 'inline-block')
    $('.profile-container').css('display', 'block')

    $('.historico').css('opacity', '0')
    $('.logo-profile .vector.profile').css('margin-top', margintop)

    setTimeout(() => {
        $('.historico').css('display', 'none')
        setTimeout(() => {
            $('.concrete .profile-container').css('opacity', '1')
            $('.resumo').css('margin-top', `0px`)
            $('.resumo .text').css('opacity', 1)
            setTimeout(() => {
                $('.resumo .text').css('display', 'block')
            }, 150);
        }, 150);
        setTimeout(() => {
            $('.logo-profile .vector.white').css('background', '#373f54')

        }, 500);
    }, 500);

})