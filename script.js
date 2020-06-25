let entireWorkDay = {
    "8 AM" : "",
    "9 AM" : "",
    "10 AM" : "",
    "11 AM" : "",
    "12 AM" : "",
    "1 PM"  : "",
    "2 PM" : "",
    "3 PM" : "",
    "4 PM" : "",
    "5 PM" : "",
};
// Since I labeled several ids on each row numerically, setting this variable will let me more easily reference said ids.
let counter = 1;
//Initial function on page load. Sets local storage if there is none currently. Otherwise, it parses what is already there.
$(document).ready(function() {
    if (!localStorage.getItem('entireWorkDay')){
        updateDailyTasks(entireWorkDay);
    } else {
        updateDailyTasks(JSON.parse(localStorage.getItem('entireWorkday')))
    }
});

function updateDailyTasks (workDayObject){
 $(".calender-row").each(function(index){
    let texting = $(this).children("div");
    $(this).children("textarea").text(dayObject[texting.text()])
 })   
}