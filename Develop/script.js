$(document).ready(function(){

// display current day on page
$('#currentDay').text(moment().format('dddd, MMMM Do'));

//function to get the current hour and change hour colors
function hourUpdater() {
    var currentHour = moment().hours();
    console.log(currentHour);
    $(".time-block").each(function(){
        var rowHour = parseInt($(this)
        .attr("id"))
        if (currentHour > rowHour) {
            $(this).children(".description").addClass("past")
        }
        else if (currentHour === rowHour) {
            $(this).children(".description").addClass("present")
        }
        else {
            $(this).children(".description").addClass("future")
        }
    })
}
hourUpdater();

//function to save user input into a block of time/local storage
$(".saveBtn").on("click",function(){
    var hourKey = $(this).parent().attr("id")
    var activity = $(this).siblings(".description").val()
    localStorage.setItem(hourKey,activity)
})

for(var i=9; i<18; i++) {
    $(`#${i} .description`).val(localStorage.getItem(i))
}
})