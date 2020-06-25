
 var date = $('#currentDay')
 
 var current = moment().format('MMMM Do YYYY, h:mm:ss A')
 var dateHeader = (date)
  dateHeader.text(current)
//initial object that will be interacting with local storage.
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

for (property in entireWorkDay) {
    let textInput = "#text-input"+counter;
    $(textInput).text(entireWorkDay[property]);
    let currentHour=moment().hour();
    let timeId = "#time" + counter;
    let timeAsString = $('time-id').text();
    let calcTime = hourNumberSwitch(timeAsString);

    if (timeNumber < currentHour){
        $(textInput).addClass("past");
    } else if (timeNumber > presentHour) {
        $(textInput).addClass("future");
    } else {
        $(textInput).addClass("present");
    }
    counter ++;
}   

function hourNumberSwitch (incString){
    switch(incString){
        case "8 AM" : return 8;
    }
}
