var selectIds = $('#panel1,#panel2,#panel3,#panel4');
$(function ($) {
    selectIds.on('show.bs.collapse hidden.bs.collapse', function () {
        $(this).prev().find('.fa').toggleClass('fa-angle-right fa-angle-down');
    })
});