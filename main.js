
(function ($) {
    $(function () {
        $(".catalog__models").on("click", ".catalog__models_item:not(.active)", function () {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.catalog")
                .find("div.example")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
})(jQuery);
(function ($) {
    $(function () {
        $(".example__photo_smallshoes").on("click", ".example__photo_smallshoes-first:not(.active)", function () {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.example__photo")
                .find("div.example__photo_shoes-first")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
})(jQuery);
(function ($) {
    $(function () {
        $(".example__photo_smallshoes").on("click", ".example__photo_smallshoes-first:not(.active)", function () {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.example__photo")
                .find("div.example__photo_shoes-second")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
})(jQuery);
(function ($) {
    $(function () {
        $(".example__photo_smallshoes").on("click", ".example__photo_smallshoes-first:not(.active)", function () {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.example__photo")
                .find("div.example__photo_shoes-third")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
})(jQuery);
(function ($) {
    $(function () {
        $(".example__photo_smallshoes").on("click", ".example__photo_smallshoes-first:not(.active)", function () {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.example__photo")
                .find("div.example__photo_shoes-four")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
})(jQuery);
(function ($) {
    $(function () {
        $(".example__photo_smallshoes").on("click", ".example__photo_smallshoes-first:not(.active)", function () {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.example__photo")
                .find("div.example__photo_shoes-five")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
})(jQuery);
(function ($) {
    $(function () {
        $(".example__photo_smallshoes").on("click", ".example__photo_smallshoes-first:not(.active)", function () {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.example__photo")
                .find("div.example__photo_shoes-six")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
})(jQuery);
(function ($) {
    $(function () {
        $(".example__photo_smallshoes").on("click", ".example__photo_smallshoes-first:not(.active)", function () {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.example__photo")
                .find("div.example__photo_shoes-seven")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
})(jQuery);
(function ($) {
    $(function () {
        $(".example__photo_smallshoes").on("click", ".example__photo_smallshoes-first:not(.active)", function () {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.example__photo")
                .find("div.example__photo_shoes-eight")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
})(jQuery);

$(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });

});

$(document).ready(function () {
    $('.example__about_another-table').click(function () {
        $('.example__about_another-table').toggleClass('clicked');
        $('#table').css('display', 'flex');
    })
});
$(document).ready(function () {
    $('.table__cross').click(function () {
        $('.table__cross').toggleClass('clicked');
        $('#table').css('display', 'none');
    })
});
$(document).ready(function () {
    $('.example__about_another-button').click(function () {
        $('.example__about_another-button').toggleClass('clicked');
        $('#form').css('display', 'flex');
    })
});
$(document).ready(function () {
    $('.form__cross').click(function () {
        $('.form__cross').toggleClass('clicked');
        $('#form').css('display', 'none');
    })
});
$(document).ready(function () {
    $('.form__button').click(function () {
        $('.form__button').css('background', 'rgb(19, 164, 81)');
    })
});
