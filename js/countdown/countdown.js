function secondsLeft(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  
  return {
    'total': t,
    'seconds': seconds
  };
}

function initializeClock(id) {
  var clock = document.getElementById(id);
  var deadline = new Date(Date.parse(new Date()) + 30 * 1000);
  
  var secondsDisplay = clock.querySelector('.seconds');

  function updateClock() {
    var t = secondsLeft(deadline);

    secondsDisplay.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= -1) {
      clearInterval(timeinterval);
      initializeClock(id);                    // utilize recursion so that immediately after 0 seconds,
    }                                         // it restarts the clock
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

initializeClock('clockdiv');
