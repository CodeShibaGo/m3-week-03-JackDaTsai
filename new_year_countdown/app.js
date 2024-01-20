// Function to update the countdown
function updateCountdown() {
    // Get the current date and time
    var now = new Date();

    // Calculate the next New Year's date
    var newYear = new Date(now.getFullYear() + 1, 0, 1);

    // Calculate the difference in milliseconds between the current date and the next New Year's date
    var diff = newYear - now;

    // If the difference is negative, log an error and exit the function
    if (diff < 0) {
        console.error('Invalid countdown date');
        return;
    }

    // Calculate the number of days, hours, minutes, and seconds left until the next New Year
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Display countdown
    $('#days').text(days);
    $('#hours').text(hours < 10 ? '0' + hours : hours);
    $('#minutes').text(minutes < 10 ? '0' + minutes : minutes);
    $('#seconds').text(seconds < 10 ? '0' + seconds : seconds);
}

setTimeout(() => {
    // Remove loading animation
    $("#loading").remove();
    // 顯示 .countdown-container
    $(".countdown-container").css("display", "flex");
}, 1000)

// Update countdown every second
setInterval(updateCountdown, 1000)