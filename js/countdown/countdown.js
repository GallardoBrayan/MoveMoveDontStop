var deadline = '0:0:0';

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
	var clock = getElementById(id);
	function updateClock(){
  	var t = getTimeRemaining(endtime);
  	clock.innerHTML = 'days: ' + t.days + '<br>' +
                    'hours: '+ t.hours + '<br>' +
                    'minutes: ' + t.minutes + '<br>' +
                    'seconds: ' + t.seconds;
  	if(t.total<=0){
    clearInterval(timeinterval);
  		}
	}
}

initializeClock('clockid',deadline);