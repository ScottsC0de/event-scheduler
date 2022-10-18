// target HTML elements using jQuery
var timeBlocks = $(".time-block");
var saveEvents = $(".saveBtn");
var confirmationMsg = $("#confirmation");
var clearButton = $("#clearBtn");

// date and current time up top
// will need to reference this for time block color
var currentDateAndTime = moment();
$("#currentDay").text(currentDateAndTime.format("dddd MMM Do, YYYY h:mma"));