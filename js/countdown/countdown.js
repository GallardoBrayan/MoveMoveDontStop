
function initializeClock(id) {
  var clock = document.getElementById(id);
  var secondsDisplay = clock.querySelector('.seconds');
  
  //var deadline = new Date(Date.parse(new Date()) + 30 * 1000);
  if ( timer1){
    timer1.increment = 1;
    return;}
  timer1 = new Timer(0);
  timer1.start();
  musicShouldBePlaying = true;


  function updateClock() {
    secondsDisplay.innerHTML = ('0' + (30 - timer1.elapsed)).slice(-2); //display
    timer1.elapsed += timer1.increment;                         //update
    if (timer1.elapsed == 31) {
      //clearInterval(timeinterval);
      ++exercise_number;
      if (exercise_number > 7){ exercise_number =0; }
      exerciseImg.src  = possible_exercises[exercise_number];
      timer1.elapsed = 0;
      //initializeClock(id);                    // utilize recursion so that immediately after 0 seconds,
    }                                         // it restarts the clock
  }



  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}



  var exercise1 = "https://s23.postimg.org/6ydnucjnf/burpee.jpg",
    exercise2 = "https://s23.postimg.org/4v38mojuj/highknees.jpg",
    exercise3 = "https://s23.postimg.org/glh642cmz/jump_squats.jpg",
    exercise4 = "https://s23.postimg.org/n0g70qjcr/mountainclimbers.jpg",
    exercise5 = "https://s23.postimg.org/bpi4q41vf/sideshuffle.jpg",
    exercise6 = "https://s23.postimg.org/uj3xn403f/skaters.jpg",
    exercise7 = "https://s23.postimg.org/jxk2b3trv/star_jumps.jpg",
    exercise8 = "https://s24.postimg.org/dgarkewj9/squat_thrust.jpg";

var possible_exercises = [exercise1, exercise2, exercise3, exercise4, exercise5, exercise6, exercise7, exercise8];
var exerciseImg = document.getElementById('exercise_image');
var exercise_number = 0;
exerciseImg.src  = possible_exercises[exercise_number];


function incExercise()
{
  ++exercise_number;
}


