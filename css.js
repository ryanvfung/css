$(function(){
    $('#cssTemplate').text('document loaded');
    $('input[type="checkbox"]').on('change',updateTemplateCSS);
});
function updateTemplateCSS () {
    var CSS = '';
    $('input:checked').parent().each(function(){
        it = $(this).find('code');
        var template = it.data('template');
        if (!template) {
            template = '<span class="inherit">inherit</span>';
        }
        CSS += it.text() + ': ' + template + ';\n';
    });
    $('#cssTemplate').html(CSS);
}