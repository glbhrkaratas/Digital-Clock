function digitalClock(){
    function updateClock(){
    var time = new Date();
    var hours=time.getHours();
    var minutes=time.getMinutes();
    var seconds=time.getSeconds();

    var updateHours=document.getElementById("hour");
    var updateMinutes=document.getElementById("minute");
    var updateSeconds=document.getElementById("second");

updateHours.innerHTML = hours;
updateMinutes.innerHTML = minutes;
updateSeconds.innerHTML = seconds;

setTimeout(updateClock, 1000);

}
updateClock();
}
digitalClock();