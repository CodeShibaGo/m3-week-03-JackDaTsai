// const action = "click";
// const speed = "300";
//
// $(document).ready(function () {
//     //Question handler
//     $("li.question").on(action, function () {
//         // Get next element
//         console.log(this) // li.question
//         $(this).next()
//             .slideToggle(speed)
//             // Select all other answers
//             .siblings("li.answer")
//             .slideUp();
//
//         //Get image for active question
//         const img = $(this).children('img');
//         //Remove the 'rotate' class for all images except the active
//         $('img').not(img).removeClass('rotate');
//         // Toggle rotate class
//         img.toggleClass('rotate');
//     });
// });

$(document).ready(function () {
    $.getJSON('faq.json', function (data) {
        $.each(data, function (key, entry) {
            $('.faq').append($('<li class="question"></li>').html('<img alt="arrow" src="img/arrow.png"/>' + entry.question));
            $('.faq').append($('<li class="answer" style="display:none;"></li>').html('<p>' + entry.answer + '</p>'));
        });
    });

    const action = "click";
    const speed = "300";

    $(document).on(action, "li.question", function () {
        $(this).next()
            .slideToggle(speed)
            .siblings("li.answer")
            .slideUp();

        const img = $(this).children('img');
        $('img').not(img).removeClass('rotate');
        img.toggleClass('rotate');
    });
});