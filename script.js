/**
 * Created by shivangi on 8/1/15.
 */
$(document).ready(function() {
    $('#right h4').click(function() {
        if(!$(this).next().is(":visible"))
        {
            $(this).next().slideDown();
        }
        else if($(this).next().is(":visible"))
        {
            $(this).next().slideUp();
        }
    });
});
