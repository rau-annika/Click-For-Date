//"DATE WITH BUTTON" 
//Assigns Date elements to variables using arrays and date methods, then combines them into a function with solution to be delivered upon onclick trigger.
var d = new Date(); //Global Variable
var weekDayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
var weekDay = weekDayName[d.getDay()];
var monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var month = monthName[d.getMonth()];
var completeDate = {
    weekDay,
    month,
    day: d.getDate(),
    year: d.getFullYear(),

    combineDateElements: function() {
        return this.weekDay + ", " + this.month + " " + this.day + ", " + this.year
    } 
}
solution = completeDate.combineDateElements();

//"TODAY'S DATE IS" 
//References var d = new Date(); from above then calls it to display automatically.
document.getElementById("date2").innerHTML = d.toDateString();
