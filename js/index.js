// работа с миниатюрами

$(document).ready(function () {


    $('.small a').click(function (e) { //объект для блокировки стандартного поведения ссылки
        e.preventDefault(); //блокировки стандартного поведения

        if ($('.big img').attr('src') != $(this).attr('href')) {

            //    e.preventDefault(); //блокировки стандартного поведения

            $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
                width: '100%',
                height: '100%',
            })
        }
    });

    

    // нажатие на кнопку "-"
    $('.button').click(function () {
        $('.gallery').slideToggle();
        if ($('.button').text() == '+') {
            $('.button').text('-')
        } else {
            $('.button').text('+')
        }
    });
    $('.small a img').click(function () { // Выделение выбранной картинки (css - св-ва)

        $(this).fadeTo(600, 0.6).css(
            {
                border: '1px dotted red',
            }
        )
    });

    $(document).mouseup(function () {
        $('.small a img').fadeTo(0, 1).css(
            {
                border: 'none',
            });
    });
});

// Задание: 
// 1. Заменить содержимое всех блоков 
// 2. Разместить элементы смол слева или справа 
// 3. Заменить клик на наведение мыши при проявлении картинок