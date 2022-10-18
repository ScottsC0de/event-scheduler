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
// .each() the shortened forEach()
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

    // clicking save event button adds to local storage and shows confirmation message
    // .on() the shortened addEventListener "onclick"
    saveEvents.on("click", function () {
        // .siblings(), targetting the save buttons sibling elements
        var timeBlockInput = $(this).siblings(".time-block")
        var userText = timeBlockInput.val();
        var savedEvent = parseInt(timeBlockInput.attr("value"));
        localStorage.setItem(savedEvent, JSON.stringify(userText)); // creating local storage key & value
        if (userText !== null) {
            confirmationMsg.text("Event saved to local storage✅");
            confirmationMsg.css('display', 'block');
        } else {
            confirmationMsg.text("Please enter an event!");
            confirmationMsg.css('display', 'block');
        }
    });

    // user input stays in box after refresh
    // grabbing each time block seperately by their local storage key 
    // and displaying their local storage value to the input box
    $("#9").val(JSON.parse(localStorage.getItem('9')));
    $("#10").val(JSON.parse(localStorage.getItem('10')));
    $("#11").val(JSON.parse(localStorage.getItem('11')));
    $("#12").val(JSON.parse(localStorage.getItem('12')));
    $("#13").val(JSON.parse(localStorage.getItem('1')));
    $("#14").val(JSON.parse(localStorage.getItem('2')));
    $("#15").val(JSON.parse(localStorage.getItem('3')));
    $("#16").val(JSON.parse(localStorage.getItem('4')));
    $("#17").val(JSON.parse(localStorage.getItem('5')));

    // a button for clearing event text inside input boxes
    clearButton.on("click", function () {
        localStorage.clear();
        confirmationMsg.text('Events cleared from local storage❌');
        confirmationMsg.css('display', 'block');
        timeBlocks.val("");
    })

});