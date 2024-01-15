const action = "click";
const speed = "300";

$(document).ready(function () {
    //Question handler
    $("li.question").on(action, function () {
        // Get next element
        console.log(this) // li.question
        $(this).next()
            .slideToggle(speed)
            // Select all other answers
            .siblings("li.answer")
            .slideUp();

        //Get image for active question
        const img = $(this).children('img');
        //Remove the 'rotate' class for all images except the active
        $('img').not(img).removeClass('rotate');
        // Toggle rotate class
        img.toggleClass('rotate');
    });
});
