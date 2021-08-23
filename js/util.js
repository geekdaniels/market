$(document).ready(function () {

    //    dashboard sidebar fix
    if ($('#sidebar').length) {
        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        });

        $('#dismiss, .overlay').on('click', function () {
            $('#sidebar').removeClass('active');
            $('.overlay').removeClass('active');
        });

        $('#sidebarCollapse').on('click', function () {

            console.log("hi");
            $('#sidebar').toggleClass('active');
            $('.overlay').toggleClass('active');
            $('body').toggleClass('body-overflow');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');

        });
    }


})

if (document.getElementById('copy')) {
    document.getElementById('copy').addEventListener('click', copyFunction);
}

function copyFunction() {
    /* Get the text field */
    var copyText = document.getElementById("linkInput");
    /* Select the text field */
    linkInput.select();
    /* Copy the text inside the text field */
    document.execCommand("copy");

    var tooltip = document.getElementById('myTooltip');
    tooltip.innerHTML = "Copied " + linkInput.value;
    /* Alert the copied text */
    //  alert("Link copied: " + linkInput.value);
}


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#profile_placeholder').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#profile_image").change(function () {
    readURL(this);
});


$('#business_license').change(function (e) {
    var fileName = e.target.files[0].name;
    $('#business_license_name').val(fileName);
});


$(".button").on("click", function () {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;

        //        calcEarnings(newVal);

    } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;

            //            calcEarnings(newVal);

        } else {
            newVal = 0;
        }
    }

    $button.parent().find("input").val(newVal);

});

if ($('#twemoji-picker').length) {
    $('#twemoji-picker').twemojiPicker();
    $('#twemoji-picker-1').twemojiPicker();
}

$('.chat-parent').on('click', function () {
    $('.chat-trail').addClass('mob-display');
    $('.chat-trail').removeClass('mob-display-none');
    $('#chat-left').addClass('mob-display-none');
    $('.chat-box').show();
    $('.create-complain-form').hide();
});

$('#chat-back').on('click', function () {
    $('.chat-trail').addClass('mob-display-none');
    $('#chat-left').removeClass('mob-display-none');
    $('.create-complain-form').hide();
});

$('#add-message').on('click', function () {
    $('.create-complain-form').show();
    $('.chat-box').hide();
    //
    $('.chat-trail').addClass('mob-display');
    $('.chat-trail').removeClass('mob-display-none');
    $('#chat-left').addClass('mob-display-none');
});
