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
  $('#9 .description').val(localStorage.getItem('9'));
  $('#10 .description').val(localStorage.getItem('10'));
  $('#11 .description').val(localStorage.getItem('11'));
  $('#12 .description').val(localStorage.getItem('12'));
  $('#13 .description').val(localStorage.getItem('13'));
  $('#14 .description').val(localStorage.getItem('14'));
  $('#15 .description').val(localStorage.getItem('15'));
  $('#16 .description').val(localStorage.getItem('16'));
  $('#17 .description').val(localStorage.getItem('17'));

  // display current day on page
  $('#currentDay').text(moment().format('dddd, MMMM Do'));
});
