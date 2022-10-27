$(document).ready(function () {
  // listen for save button clicks
  $('.saveBtn').on('click', function () {
    // get nearby values
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    // save in localStorage
    localStorage.setItem(time, value);

    // Show notification that item was saved to localStorage by adding class 'show'
    $('.notification').addClass('show');

    // Timeout to remove 'show' class after 5 seconds
    setTimeout(function () {
      $('.notification').removeClass('show');
    }, 5000);
  });

  function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();

    // loop over time blocks
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id'));

      // check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }

      // // check to see if there are any future appointments
      // var futureApp = blockHour + "user input";
      // if (futureApp === true) {
      //   $(this).removeClass(future);
      //   $(this).addClass(future-appointment);
      // } else {
      //   hourUpdater();
      // }
    });
  }

  hourUpdater();

  // set up interval to check if current time needs to be updated
  var interval = setInterval(hourUpdater, 15000);

  // load any saved data from localStorage
  $('#h9 .description').val(localStorage.getItem('h9'));
  $('#h10 .description').val(localStorage.getItem('h10'));
  $('#h11 .description').val(localStorage.getItem('h11'));
  $('#h12 .description').val(localStorage.getItem('h12'));
  $('#h13 .description').val(localStorage.getItem('h13'));
  $('#h14 .description').val(localStorage.getItem('h14'));
  $('#h15 .description').val(localStorage.getItem('h15'));
  $('#h16 .description').val(localStorage.getItem('h16'));
  $('#h17 .description').val(localStorage.getItem('h17'));

  // display current day on page
  $('#currentDay').text(moment().format('dddd, MMMM Do'));
});