$('select').each(function () {
    let $this = $(this);
    const optionsCount = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    const $styledSelect = $this.next('div.select-styled');
    $styledSelect.html(`<p>${$this.children('option').eq(0).text()}</p>`);
    $this.children('option').eq(0).hide();

    const $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (let i = 0; i < optionsCount; i++) {
        $(`<li rel="${$this.children('option').eq(i).val()}">${$this.children('option').eq(i).text()}</li>`).appendTo($list);
    }

    const $listItems = $list.children('li');

    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.select-styled.active').each(function () {
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.html(`<p>${$(this).attr('rel')}</p>`).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
    });

    $(document).click(() => {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});