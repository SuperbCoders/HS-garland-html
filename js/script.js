var browserWindow, doc;

$(function ($) {

    var header = $('.header'), dateRange = $('.dateRange');

    doc = $(document);
    browserWindow = $(window);

    browserWindow.on('scroll', function () {
        header.toggleClass('fixed_header', doc.scrollTop() >= 90);
    });

    $(window).stellar({
        hideDistantElements: false,
        responsive: true,
        horizontalScrolling: false,
        verticalScrolling: true
    });

    $('.validateMe').validationEngine({
        scroll: false,
        showPrompts: true,
        showArrow: false,
        addSuccessCssClassToField: 'success',
        addFailureCssClassToField: 'error',
        parentFormClass: '.orderForm',
        promptPosition: "centerRight",
        autoHidePrompt: true,
        autoHideDelay: 2000,
        autoPositionUpdate: true,
        addPromptClass: 'relative_mode',
        showOneMessage: false
    }).find('[class*=validate]').on ('blur keyup', function () {
        var form = $(this).closest('.validateMe'), notDone = false;

        form.find('[class*=validate]').each(function () {
            if (!$(this).hasClass('success')) {
                notDone = true;
            }
        });

        $('#actionBtn').attr('disabled', notDone ? 'disabled' : null);

    });

});

function plural(n, str1, str2, str5) {
    return n + ' ' + ((((n % 10) == 1) && ((n % 100) != 11)) ? (str1) : (((((n % 10) >= 2) && ((n % 10) <= 4)) && (((n % 100) < 10) || ((n % 100) >= 20))) ? (str2) : (str5)))
}