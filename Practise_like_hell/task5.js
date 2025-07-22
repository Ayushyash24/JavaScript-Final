// build a countdown timer that starts when a button is clicked and updates the display in real-time.

var btn = document.querySelector("#start");
var h3= document.querySelector("h3");
var stop = document.querySelector("#stop")
var int;
btn.addEventListener("click",function(){



    var count =0;
     int =setInterval(function(){
        h3.textContent= count;
    // console.log(count);
        count++;
    },1000);  // timer is in millisecond.
})


stop.addEventListener("click",function(){
    clearInterval(int);
})