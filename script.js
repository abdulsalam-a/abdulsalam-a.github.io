window.onload = function() {
    var minutes = 0;
    var seconds = 00;
    var tens = 00;
    var on = 0;
    
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var appendMinutes = document.getElementById("minutes")
    var buttonStart = document.getElementById('start');
    var buttonStop = document.getElementById('stop');
    var buttonReset = document.getElementById('reset');
    var Interval ;


   function startTimer () {
        tens++; 
        
        if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
        }
        
        if (tens > 9){
        appendTens.innerHTML = tens;
        
        } 
        
        if (tens > 99) {
        console.log("seconds");
        seconds++;
        if (seconds > 9){
            appendSeconds.innerHTML = seconds;
        } else {
        appendSeconds.innerHTML = "0" + seconds;
        }

        tens = 0;
        appendTens.innerHTML = "0" + 0;
        }    
        
        if (seconds > 59){
            minutes++;
            appendMinutes.innerHTML = minutes;
            seconds = "0" + 0;
        }
  
    }

    buttonStart.onclick = function () {
        if(on == 0){
            Interval = setInterval(startTimer, 10);
        }
        on = 1;
    }

    buttonStop.onclick = function() {
        clearInterval(Interval);
        on = 0;
    }

    buttonReset.onclick = function() {
        clearInterval(Interval);
        minutes = "0";
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
    }
}