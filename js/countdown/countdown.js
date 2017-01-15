/*
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
  exerciseImg.src = possible_exercises[exercise_number];

  var secondsDisplay = clock.querySelector('.seconds');
  
  function updateClock() {
    var t = secondsLeft(deadline);

    secondsDisplay.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= -1) {
      clearInterval(timeinterval);
    ++exercise_number;
      initializeClock(id);                    // utilize recursion so that immediately after 0 seconds,
    }                                         // it restarts the clock
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
*/


class Timer {
  constructor(startTime) { 
  this.elapsed = startTime;
    this.increment = 1;
  }
  
  start(){
    if (this.increment == 0 ){
      this.increment = 1;
    }
  }
  
  pause(){
    this.increment = 0;
  }
  
}

var timer1;

function initializeClock(id) {
  var clock = document.getElementById(id);
  var secondsDisplay = clock.querySelector('.seconds');
  
  //var deadline = new Date(Date.parse(new Date()) + 30 * 1000);
  if ( timer1){
    timer1.increment = 1;
    return;}
  timer1 = new Timer(0);
  timer1.start();
  
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



var exercise1 = "https://s27.postimg.org/m2vj38k7n/abdominal_captain_crunch.jpg"
var exercise2 = "https://s27.postimg.org/65wr6irtf/jump_jak_and_dakter.jpg"
var exercise3 = "https://s27.postimg.org/ckvs36yj7/plunge.jpg"
var exercise4 = "https://s27.postimg.org/krnrurolv/push_up_and_memetation.jpg"
var exercise5 = "https://s27.postimg.org/wut3ibzo3/push_waddap.jpg"
var exercise6 = "https://s27.postimg.org/et9ykj5n7/running_low_elbows.jpg"
var exercise7 = "https://s27.postimg.org/vibegg28j/step_down_intotable.jpg"
var exercise8 = "https://s27.postimg.org/dgs9in87n/third_world_squat.jpg"

var possible_exercises = [exercise1, exercise2, exercise3, exercise4, exercise5, exercise6, exercise7, exercise8];
var exerciseImg = document.getElementById('exercise_image');
var exercise_number = 0;
exerciseImg.src  = possible_exercises[exercise_number];


function incExercise()
{
  ++exercise_number;
}


document.getElementById("pauseButton").onclick = function(){
    timer1.pause();
};