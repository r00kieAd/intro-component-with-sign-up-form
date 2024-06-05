$('.inp input').focus(function() {
    $(this).css(
        {
            "border-color": "hsl(249, 10%, 26%)",
            "color": "hsl(249, 10%, 26%)"
        }
    );
    $('.err-ico').fadeOut();
    $(`.${$(this).prop('name')} span`).hide();
})

$('.inp input').blur(function() {
    $(this).css("border-color", "hsl(246, 25%, 77%)");
    $(`.${$(this).prop('name')} span`).hide();
})

function showErr(e, i) {
    $('.err-ico').eq(i).fadeIn();
    $(e).css(
        {
            "border-color": "hsl(0, 100%, 74%)",
            "color": "hsl(0, 100%, 74%)"
        }
    );
}

$('.sub button').click(
    function() {
        const inputs = document.querySelectorAll('.inp input');
        i = 1;
        hasErr = false;
        inputs.forEach((e) => {
            const text = e.value;
            if (text == "") {
                $(`.e${i}`).show();
                showErr($('.inp input').eq(i-1), i-1);
                hasErr = true;
            } else {
                if (i <= 2) {
                    if (!/^[a-zA-Z]+$/.test(text)) {
                        $(`.invalid${i}`).show();
                        showErr($('.inp input').eq(i-1), i-1); 
                        hasErr = true;
                    }
                } else if (i == 3) {
                    if (!/^\S+@\S+\.\S+$/.test(text)) {
                        $(`.e${i}`).show();
                        showErr($('.inp input').eq(i-1), i-1); 
                        hasErr = true;
                    }
                } else {
                    if (text.length < 8) {
                        $(`.e${i}`).show();
                        showErr($('.inp input').eq(i-1), i-1); 
                        hasErr = true;
                    }
                }
            }
            i++;
        });
        if (!hasErr) {
            alert('Request Received!');
        }
    }
)