$('.inp input').focus(function() {
    $(this).css(
        {
            "border-color": "hsl(249, 10%, 26%)",
            "color": "hsl(249, 10%, 26%)"
        }
    );
    $(`.${$(this).prop('name')} span`).hide();
})

$('.inp input').blur(function() {
    $(this).css("border-color", "hsl(246, 25%, 77%)");
    $(`.${$(this).prop('name')} span`).hide();
})

function showErr(e) {
    $(e).css(
        {
            "border-color": "hsl(0, 100%, 74%)",
            "color": "hsl(0, 100%, 74%)"
        }
    );
}

$('.sub button').click(
    function() {
        $('.inp input').each(
            function (i) {
                i++;
                const input_val = $(this).val();
                if (input_val == "") {
                    showErr(this);
                    $(`.e${i}`).show();
                } else {
                    if (!/^[a-zA-Z]+$/.test(input_val.toString()) && i <= 2) {
                        showErr(this);
                        $(`.e${i}`).next().show();
                    } else {
                        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input_val.toString())) {
                            showErr(this);
                            $(`.e${i}`).next().show();
                        }
                    }
                    
                }
            }
        );
    }
)