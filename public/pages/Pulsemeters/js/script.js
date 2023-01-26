$(document).ready(function(){
/*     $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/redarrow-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/redarrow-right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
        ]
    }); */

    // slider

    var slider = tns({
        container: '.carousel__inner',
        nav: true,
        controls: false,
        // items: 1,
        // slideBy: 1,
        // autoplay: false,
        // controlsText: [
        //     `<img src="icons/redarrow-left.png">`,        
        //     `<img src="icons/redarrow-right.png">`
        // ]
        prevButton: document.querySelector('.prev'),
        nextButton: document.querySelector('.next'),
        responsive: {
            576: {
                nav: false,
                controls: true
            },
        }
    });

    // tabs

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
         $(this).on('click', function() {
            $('#order .modal_descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
         });
    });

    // form validation

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }        
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите Ваше имя",
                    minlength: jQuery.validator.format("Как минимум {0} символа")
                },
                phone: "Пожалуйста укажите Ваш телефон",
                email: {
                    required: "Нам нужна Ваша почта, чтобы связаться",
                    email: "Почта должна быть в формате name@domain.com"
                }
            }
        });
    }

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-9999");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "../mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    // smooth scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href='#up']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    animateArr = ['flip', 'heartBeat', 'wobble'];

    for (let i = 1; i <= 3; i++) {
        const advImg = document.querySelector(`#advimg${i}`);
        advImg.addEventListener('mouseover', function() {
            advImg.classList.add('animate__animated', `animate__${animateArr[i-1]}`);
        });
    };

    new WOW().init();
});