// target HTML elements using jQuery
var timeBlocks = $(".time-block");
var saveEvents = $(".saveBtn");
var confirmationMsg = $("#confirmation");
var clearButton = $("#clearBtn");

// date and current time up top
// will need to reference this for time block color
var currentDateAndTime = moment();
$("#currentDay").text(currentDateAndTime.format("dddd MMM Do, YYYY h:mma"));

// function for changing time block color based on current hour
timeBlocks.each(function () {
    var currentBlock = $(this); // $(this) refers to each timeBlock seperately
    var currentBlockHour = parseInt(currentBlock.attr("name")); // parsing the "name" attribute of each block, numbers used to compare to current hour
    var currentTimeConvert = new Date(); // getting the current hour
    var currentHour = currentTimeConvert.getHours();
    // comparing current hour to each block's hour name
    if (currentBlockHour < currentHour) {
        // changing the colors to each css class
        currentBlock.addClass("past");
        currentBlock.removeClass("present");
        currentBlock.removeClass("future");

    } else if (currentBlockHour == currentHour) {
        currentBlock.removeClass("past");
        currentBlock.addClass("present");
        currentBlock.removeClass("future");

    } else {
        currentBlock.removeClass("past");
        currentBlock.removeClass("present");
        currentBlock.addClass("future");
    }
});