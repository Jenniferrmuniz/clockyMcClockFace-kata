

var whatTimeIsIt = function(angle) {
  
  if (angle===0 || angle===360){
    return "12:00";
  }

  let minutes = angle*2;
  
  let hour = Math.floor((minutes/60)).toFixed();
  hour = ("0" + hour).slice(-2);
  
  let min = Math.floor((minutes % 60));
  min = ("0" + min).slice(-2);

  
  if(hour === "00"){
    hour = "12";
  }


  var time = (hour.toString())+':'+(min.toString());
  return time;
}