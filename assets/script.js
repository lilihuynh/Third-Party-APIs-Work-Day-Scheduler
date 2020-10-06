$(document).ready(function () {

    //add date and time to header
    $("#currentDay").text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm a'));
})