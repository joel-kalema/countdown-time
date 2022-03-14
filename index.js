
let daysdata=document.getElementById('days');
let hoursdata=document.getElementById('hours');
let mindata=document.getElementById('min');
let secdata=document.getElementById('sec');
let autocunt=newsYears;


let newYears='1 Jan 2022';

function comptDown(){
    let newYearsDate= new Date(newYears);
    let currentDate=  new Date();

    let totalSecond=( newYearsDate - currentDate)/ 1000;

    let days= Math.floor(totalSecond / 3600 / 24);
    let hours= Math.floor(totalSecond / 3600) % 24;
    let minutes= Math.floor(totalSecond / 60) % 60;
    let seconde= Math.floor(totalSecond) % 60;

    daysdata.innerHTML = days;
    hoursdata.innerHTML =formatTime(hours);
    mindata.innerHTML = formatTime(minutes);
    secdata.innerHTML = formatTime(seconde);
}
function formatTime(time){
    return time < 10 ? (`0${time}`): time;
}
comptDown();
setInterval(comptDown, 1000 );
