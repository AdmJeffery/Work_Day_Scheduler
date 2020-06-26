
 
//initial object that will be interacting with local storage.
let entireWorkDay = {
    "8 AM" : "",
    "9 AM" : "",
    "10 AM" : "",
    "11 AM" : "",
    "12 PM" : "",
    "1 PM"  : "",
    "2 PM" : "",
    "3 PM" : "",
    "4 PM" : "",
    "5 PM" : "",
};
// Since I labeled several ids on each row numerically, setting this variable will let me more easily reference said ids.
let counter = 1;
//Initial function on page load. Sets local storage if there is none currently. Also utilizes updateDailyTasks function and displays date.
$(document).ready(function() {
    if (!localStorage.getItem('entireWorkDay')){
        updateDailyTasks(entireWorkDay);
    } else {
        let object = JSON.parse(localStorage.getItem('entireWorkDay'))
        updateDailyTasks(object)
        }
        
       
        var dateHeader = document.getElementById('currentDay');
 
        var current = moment().format('MMMM Do YYYY,')
       
         dateHeader.textContent = current;
         console.log(dateHeader);
    
});
//function that fills in items on list.
function updateDailyTasks (workdayObject){
 $(".calender-row").each(function(){
    let texting = $(this).children("div");
    $(this).children("textarea").text(workdayObject[texting.text()])
 })   
}

for (property in entireWorkDay) {
    let textInput = "#text-input"+counter;
    let timeId = "#hour" + counter;
    
    $(textInput).text(entireWorkDay[property]);
    
    let currentHour = moment().hour();
    
    // this portion determines what hour it is and colorcodes page accordingly.
    let timeAsString = $(timeId).text();
    let calcTime = hourNumberSwitch(timeAsString);

    if (calcTime < currentHour){
        $(textInput).addClass("past");
    } else if (calcTime > currentHour) {
        $(textInput).addClass("future");
    } else {
        $(textInput).addClass("present");
    }
    counter ++;
}  

$('button').click(function() {
    value = $(this).siblings("textarea").val();
    hourString = $(this).siblings("div").text();

    saveSchedule(hourString, value);
});
//main switch that is essential in determining time and color-coding.
function hourNumberSwitch (incString){
    switch(incString){
        case "8 AM" : return 8;
        case "9 AM" : return 9;
        case "10 AM": return 10;
        case "11 AM" : return 11;
        case "12 PM" : return 12;
        case "1 PM" : return 13;
        case "2 PM" : return 14;
        case "3 PM" : return 15;
        case "4 PM" : return 16;
        case "5 PM" : return 17;
    }
}
//functio that actually saves data
function saveSchedule(hourString, value) {
    
    if(!localStorage.getItem('entireWorkDay')) {
        initializeLocalStorage();
    }
    let workHours = JSON.parse(localStorage.getItem('entireWorkDay'));
    workHours[hourString] = value

    saveLocalStorage(workHours);
}

function initializeLocalStorage() {
    localStorage.setItem ('entireWorkDay', JSON.stringify(entireWorkDay))
    loadCorrectDataSet();
    
}

function saveLocalStorage(incObj) {
    
    localStorage.setItem('entireWorkDay', JSON.stringify(incObj))
}

function loadCorrectDataSet () {
    result = localStorage.getItem('entireWorkDay')
    return (result ? result : entireWorkDay);
}